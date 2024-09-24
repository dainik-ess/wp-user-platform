import { Time } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { Validators } from 'ngx-editor';
import { BaseService } from '../../../../shared/services/base.service';
import { url } from '../../../../app.router';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../../../../shared/services/toast.service';
import { LoaderService } from '../../../../shared/services/loader.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [
    SharedModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    FilePondModule,
    NgxDropzoneModule,
    FlatpickrModule,
    ReactiveFormsModule,
  ],
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent {
  // Form group
  public productForm: FormGroup;

  // Select options
  public selectedSimpleItem = 'Category';
  public categoryItems: string[] = [];

  public selectedSimpleItem1 = 'select';
  public simpleItems1: string[] = ['All', 'Male', 'Female', 'Others'];

  public selectedSimpleItem2 = 'select';
  public simpleItems2: string[] = [
    'Extra Small',
    'Small',
    'Medium',
    'Extra Large',
    'Large',
  ];

  public selectedSimpleItem4 = 'select';
  public simpleItems4: string[] = [
    'White',
    'Orange',
    'Purple',
    'Pink',
    'Blue',
    'Yellow',
  ];

  public selectedSimpleItem6 = 'select';
  public simpleItems6: string[] = ['In Stock', 'Out of stock'];

  // FilePond settings
  @ViewChild('myPond') public myPond!: FilePondComponent;

  public pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here to Upload...',
    server: {
      load: (source: string) => {
        console.log('Loading file from:', source); // Debug log
        return {
          url: source,
          options: {
            type: 'local',
          },
        };
      },
      process: null,
      revert: null,
      restore: null,
      fetch: null,
    },
  };

  public singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here to Upload...',
  };

  public pondFiles: FilePond.FilePondOptions['files'] = [];

  public isEditData: string | null = null;

  constructor(
    private fb: FormBuilder,
    private _baseService: BaseService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastService,
    private cd: ChangeDetectorRef,
    private loader: LoaderService
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      gst: ['', Validators.required],
      packOfQuantity: ['', Validators.required],
      cost: [[], Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      actualPrice: ['', Validators.required],
      weight: ['', Validators.required],
      discount: ['', Validators.required],
      displayPrice: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.dataInitializer();
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.getSingleProduct(id);
      }
    });
  }

  /*---------------------------------
  Public methods
  -----------------------------------*/

  public onSubmit(): void {
    if (this.productForm.invalid) return;
    const formData = new FormData();

    // Check if pondFiles is defined and handle type conversion
    let tempArray: any = [];
    if (this.pondFiles) {
      this.pondFiles.forEach((file: any) => {
        console.log('file: ', file);

        if (file.file instanceof File) {
          formData.append('images', file.file);
        } else if (file.source && file.options?.type === 'remote') {
          tempArray.push(file.source);
        }
      });
    }

    if (tempArray.length > 0) {
      formData.append('mediaLinks', JSON.stringify(tempArray));
    }

    formData.append(
      'productCategoryId',
      this.productForm.get('category')?.value ?? ''
    );
    formData.append('gst', this.productForm.get('gst')?.value ?? '');
    formData.append(
      'productName',
      this.productForm.get('productName')?.value ?? ''
    );
    formData.append(
      'description',
      this.productForm.get('description')?.value ?? ''
    );
    formData.append(
      'packOfQuantity',
      this.productForm.get('packOfQuantity')?.value ?? ''
    );
    formData.append('cost', this.productForm.get('cost')?.value ?? '');
    formData.append(
      'actualPrice',
      this.productForm.get('actualPrice')?.value ?? ''
    );
    formData.append('discount', this.productForm.get('discount')?.value ?? '');
    formData.append('weight', this.productForm.get('weight')?.value ?? '');
    formData.append(
      'displayPrice',
      this.productForm.get('displayPrice')?.value ?? ''
    );
    formData.append(
      'availability',
      this.productForm.get('availability')?.value ?? ''
    );

    if (this.isEditData) {
    }

    const urlData = this.isEditData
      ? url.editProduct + this.isEditData
      : url.addProduct;

    const requestMethod = this.isEditData ? 'put' : 'post';

    this.loader.hideLoader();

    this._baseService[requestMethod](urlData, formData).subscribe({
      next: (res: any) => {
        this.productForm.reset();
        this.router.navigateByUrl('pages/ecommerce/products');
        this.toastr.showToastMessage(res.message, 'success-style');
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  public pondHandleInit(): void {
    //
  }

  public pondHandleAddFile(event: any): void {
    // Ensure pondFiles is defined
    if (this.pondFiles) {
      // Push the new file to the pondFiles array
      this.pondFiles.push(event.file);
    }
  }

  public pondHandleActivateFile(event: any): void {
    //
  }

  public pondRemoveFile(event: any): void {
    // Ensure pondFiles is defined
    if (this.pondFiles) {
      const removedFile = event.file; // Get the removed file object
      // Find the index of the removed file in the pondFiles array
      const index = this.pondFiles.findIndex((file: any) => {
        // Compare using source or id, depending on FilePond's file structure
        return (
          file.source === removedFile.source ||
          file.file?.name === removedFile.file?.name
        );
      });

      // If the file is found, remove it from the array
      if (index > -1) {
        this.pondFiles.splice(index, 1);
      }
    }
  }

  addCustomUser = (category: any) => {
    if (!category) return;
    this.loader.showLoader();

    let params = {
      name: category,
    };
    this._baseService.post(url.addCategory, params).subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllCategory();
          this.toastr.showToastMessage(res.message, 'success-style');
        }
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  };

  onRemove(categoryId: string, e: Event) {
    console.log('categoryId: ', categoryId);
    e.stopPropagation();

    this.loader.showLoader();
    this._baseService.delete(url.deleteCategory + categoryId).subscribe({
      next: (res: any) => {
        if (res) {
          this.getAllCategory();
          this.categoryItems = [...this.categoryItems]
        }
      },
      error: (err: any) => {
        this.toastr.showToastMessage(err, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  /*---------------------------------
  Private  methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private dataInitializer(): void {
    this.getAllCategory();
  }

  /***
   * method for get all category list
   */
  private getAllCategory() {
    this.categoryItems = [];
    this.loader.showLoader();

    this._baseService.get(url.getCategory, {}).subscribe({
      next: (response: any) => {
        this.categoryItems = response.data.data;
      },
      error: (error: any) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  private getSingleProduct(id: string) {
    this.loader.showLoader();

    this._baseService.get(url.getSingleProduct + id, {}).subscribe({
      next: (response: any) => {
        if (response?.success) {
          this.isEditData = response?.data?.id;
          this.setValue(response?.data);
          this.toastr.showToastMessage(response.message, 'success-style');
        }
      },
      error: (error: any) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  private setValue(data: any) {
    console.log('data: ', data);
    const colorsArray = data.color ? data.color.split(',') : [];

    this.productForm.patchValue({
      productName: data.productName,
      category: data.productCategoryId,
      gst: data.gst,
      packOfQuantity: data.packOfQuantity,
      cost: data.cost,
      description: data.description,
      actualPrice: data.actualPrice,
      weight: data.weight,
      discount: data.discount,
      displayPrice: data.displayPrice,
      availability: data.availability,
    });

    this.pondFiles = data.images.map((imageUrl: string) => ({
      source: imageUrl,
      options: {
        type: 'remote', // This is important for displaying the image
      },
    }));
  }
}
