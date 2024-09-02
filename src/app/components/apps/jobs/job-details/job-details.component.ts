import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { GalleryModule } from 'ng-gallery';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [SharedModule,GalleryModule,FormsModule,ReactiveFormsModule,NgbModule,CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  currentSlide = 1 ;
  
  @ViewChild("sliderRef")
  sliderRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: any
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )

    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

}

