import { Component } from '@angular/core';
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {  Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule,GalleryModule,LightboxModule,SimplebarAngularModule,NgbModule,LightgalleryModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  title = 'angular-demo';
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

 items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item: { srcUrl: any; previewUrl: any }) =>
        new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }
}
const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-32.jpg',
    previewUrl: './assets/images/media/media-32.jpg',
  },
  {
    srcUrl: './assets/images/media/media-31.jpg',
    previewUrl: './assets/images/media/media-31.jpg',
  },
  {
    srcUrl: './assets/images/media/media-30.jpg',
    previewUrl: './assets/images/media/media-30.jpg',
  },
  {
    srcUrl: './assets/images/media/media-26.jpg',
    previewUrl: './assets/images/media/media-26.jpg',
  },
  
]
