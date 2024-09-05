import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';
import {
  LabelType,
  NgxSliderModule,
  Options,
} from '@angular-slider/ngx-slider';
import { BaseService } from '../../../../shared/services/base.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { url } from '../../../../app.router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SharedModule,
    NgbModule,
    RouterModule,
    NgxSliderModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [CurrencyPipe],
})
export class ProductsComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;

  searchText: FormControl;
  pageIndex: number = 1;
  pageSize: number = 5;
  totalItems = 0;

  minValue: number = 100;
  maxValue: number = 400;
  categoryCheckId: any;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b></b> $' + value;
        case LabelType.High:
          return '<b></b> $' + value;
        default:
          return '$' + value;
      }
    },
  };

  productItems: any[] = [];
  searchUpdater = new Subject<string>();
  priceRangeUpdater = new Subject<{ min: number; max: number }>();
  selectedCategories: string[] = []; // Array to keep track of selected category IDs

  @ViewChild('filter', { static: false }) filter: any;
  public categoryItems: any[] = [];
  selectedCategoryId: string | null = null; // This will hold the selected category's ID

  constructor(private _baseService: BaseService, private router: Router) {
    this.searchUpdater
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => this.dataInitializer());

    // Slider change handling with debounce
    this.priceRangeUpdater
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((range) => this.getAllProductList(range.min, range.max));
    this.searchText = new FormControl('');
  }

  ngOnInit(): void {
    this.dataInitializer();
  }

  /*---------------------------------
  Public methods
  -----------------------------------*/

  public deleteProduct(index: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true,
      })
      .then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );

          // API CALLING DELETE THE PRODUCT DATA
          this._baseService.delete(url.deleteProduct + index).subscribe({
            next: (res) => {
              if (res) {
                this.getAllProductList();
              }
            },
            error: (err) => {},
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }

  public onPageChange(page: number): void {
    this.pageIndex = page;
    this.getAllProductList();
  }

  public editProduct(data: any): void {
    this.router.navigate(['/pages/ecommerce/addproduct'], {
      queryParams: { id: data._id },
    });
  }

  public viewProduct(data: any): void {
    this.router.navigate(['/pages/ecommerce/product-details'], {
      queryParams: { id: data._id },
    });
  }

  public onPriceRangeChange() {
    this.priceRangeUpdater.next({ min: this.minValue, max: this.maxValue });
  }

  /**
   * input method for search the data
   * @param event set the event
   */
  onSerach(event: any) {
    this.searchText.setValue(event.target.value);
    this.searchUpdater.next(this.filter.nativeElement.value);
  }

  public checkCategoryValue(categoryId: string) {
    this.selectedCategoryId = this.selectedCategoryId === categoryId ? null : categoryId;
    this.getAllProductList();
  }

  /*---------------------------------
  Private methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private dataInitializer(): void {
    this.getAllProductList();
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

  /***
   * method for get all listing data
   */
  private getAllProductList(minValue?: number, maxValue?: number) {
    // this.loader.showLoader();
    const params: any = {
      page: this.pageIndex,
      perPage: this.pageSize,
    };

    if (this.searchText?.value) {
      params['searchParam'] = this.searchText.value;
    }
    if (minValue) {
      params['priceLow'] = minValue;
    }
    if (maxValue) {
      params['priceHigh'] = maxValue;
    }
    if(this.selectedCategoryId){
      params['categoryId'] = this.selectedCategoryId;
    }
    this._baseService.get(url.getProduct, params).subscribe({
      next: (response) => {
        if (response) {
          this.productItems = response.data;
          this.totalItems = response.data.length;
        }
      },
      error: (error) => {
        console.log('error: ', error);
      },
    });
  }
}
