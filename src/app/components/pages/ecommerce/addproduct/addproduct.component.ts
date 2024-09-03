import { Time } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
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
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      gender: ['', Validators.required],
      size: ['', Validators.required],
      colors: [[], Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      cost: ['', Validators.required],
      actualPrice: ['', Validators.required],
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
    if (this.pondFiles) {
      this.pondFiles.forEach((file) => {
        // Extract the actual file if it is a FilePondInitialFile or similar
        if (file instanceof File) {
          formData.append('images', file);
        } else if (file instanceof Blob) {
          formData.append('images', file);
        } else if (typeof file === 'object' && 'file' in file) {
          const pondFile = file as { file: File };
          formData.append('images', pondFile.file);
        }
      });
    }
    formData.append(
      'productCategoryId',
      this.productForm.get('category')?.value ?? ''
    );
    formData.append('gender', this.productForm.get('gender')?.value ?? '');
    formData.append(
      'productName',
      this.productForm.get('productName')?.value ?? ''
    );
    formData.append(
      'description',
      this.productForm.get('description')?.value ?? ''
    );
    formData.append('size', this.productForm.get('size')?.value ?? '');
    formData.append('color', this.productForm.get('colors')?.value ?? '');
    formData.append('cost', this.productForm.get('cost')?.value ?? '');
    formData.append(
      'actualPrice',
      this.productForm.get('actualPrice')?.value ?? ''
    );
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

    this._baseService[requestMethod](urlData, formData).subscribe({
      next: (res: any) => {
        this.productForm.reset();
        this.router.navigateByUrl('pages/ecommerce/products');
      },
      error: (err: any) => {},
    });
  }

  public pondHandleInit(): void {
    //
  }

  public pondHandleAddFile(event: any): void {
    if (this.pondFiles) {
      this.pondFiles.push(event.file);
    }
  }

  public pondHandleActivateFile(event: any): void {
    //
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

    this._baseService.get(url.getCategory, {}).subscribe({
      next: (response: any) => {
        this.categoryItems = response.data;
      },
      error: (error: any) => {},
    });
  }

  private getSingleProduct(id: string) {
    this._baseService.get(url.getSingleProduct + id, {}).subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.isEditData = response?.data?._id;
          this.setValue(response?.data);
        }
      },
      error: (error: any) => {},
    });
  }

  private setValue(data: any) {
    const colorsArray = data.color ? data.color.split(',') : [];

    this.productForm.patchValue({
      productName: data.productName,
      category: data.productCategoryId._id,
      gender: data.gender,
      size: data.size,
      colors: colorsArray,
      description: data.description,
      cost: data.cost,
      actualPrice: data.actualPrice,
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
