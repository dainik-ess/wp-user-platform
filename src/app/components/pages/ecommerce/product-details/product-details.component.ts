import { Component } from '@angular/core';
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BaseService } from '../../../../shared/services/base.service';
import { url } from '../../../../app.router';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    SharedModule,
    GalleryModule,
    NgbModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [CurrencyPipe],
})
export class ProductDetailsComponent {
  isCollapsed = true;

  dotsConfig!: false;

  
  imagesRect: Image[] = [
    // new Image(
    //   0,
    //   {
    //     img: './assets/images/ecommerce/png/15.png',
    //   },
    //   { img: './assets/images/ecommerce/png/15.png',
    // }
    // ),
    // new Image(1, { img: './assets/images/ecommerce/png/13.png' }),
    // new Image(
    //   2,
    //   {
    //     img: './assets/images/ecommerce/png/17.png',
    //   },
    //   {
    //     img: './assets/images/ecommerce/png/17.png',
    //   }
    // ),
    // new Image(
    //   3,
    //   {
    //     img: './assets/images/ecommerce/png/14.png',
    //   },
    //   { img: './assets/images/ecommerce/png/14.png',
    //   }
    // ),
    // new Image(4, { img: './assets/images/ecommerce/png/13.png' }),
  ];

  viewProduct: any;
  mainImage: string = '';


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.getSingleProduct(id);
      }
    });

    
  }

  constructor(
    private route: ActivatedRoute,
    private _baseService: BaseService
  ) {}

  /*---------------------------------
  Public methods
  -----------------------------------*/

  changeImage(imgURL:string){
    this.mainImage = imgURL;
  }

  /*---------------------------------
  Private methods
  -----------------------------------*/

  private getSingleProduct(id: string) {
    this._baseService.get(url.getSingleProduct + id, {}).subscribe({
      next: (response: any) => {
        if (response?.status) {
          this.viewProduct = response?.data;
          this.viewProduct['color'] = response?.data?.color?.split(',');
          this.mainImage = response?.data?.images[0]
          // this.galleryImages = response?.data?.image;
        }
      },
      error: (error: any) => {},
    });
  }
}
