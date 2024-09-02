import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-modals-closes',
  standalone: true,
  imports: [SharedModule,NgbModule,FormsModule,ReactiveFormsModule,NgSelectModule],
  templateUrl: './modals-closes.component.html',
  styleUrl: './modals-closes.component.scss'
})
export class ModalsClosesComponent {
  @ViewChild('modal1')
  modal1!: ElementRef;
  @ViewChild('modal2')
  modal2!: ElementRef;

  constructor(private modalService: NgbModal, private renderer: Renderer2) {}

 
  ngOnInit(): void {}

  openScale(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }

  openSlideRight(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInRight',
    });
  }

  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
  openFall(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'effect-fall',
    });
  }
  openFlipHorizontal(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInY',
    });
  }
  openFlipVertical(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openSuperScaled(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__zoomIn',
    });
  }
  openSign(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__flipInX',
    });
  }
  openRotateBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }

  openJustMe(justme: any) {
    this.modalService.open(justme, {
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  openright(right: any) {
    this.modalService.open(right, { centered: true });
  }

  openBasic(basicModal: any) {
    this.modalService.open(basicModal);
  }

  StaticBackdrop(staticbackdropModal: any) {
    this.modalService.open(staticbackdropModal);
  }

  VerticalCenter(VerticalCenterModal: any) {
    this.modalService.open(VerticalCenterModal, { centered: true });
  }

  GridOpen(gridModal: any) {
    this.modalService.open(gridModal, { size: 'lg' });
  }

  SuccessOpen(successModal: any) {
    this.modalService.open(successModal, { centered: true });
  }

  WarningOpen(warningModal: any) {
    this.modalService.open(warningModal, { centered: true });
  }

  Select2Open(select2Modal: any) {
    this.modalService.open(select2Modal, { size: 'sm' });
  }

  openScrollable(scrollModal: any) {
    this.modalService.open(scrollModal, { scrollable: true });
  }

  scrollableContent(ScrollingcontentModal: any) {
    this.modalService.open(ScrollingcontentModal, { scrollable: true });
  }

  VerticalCenterScroll(VerticalCenterScrollModal: any) {
    this.modalService.open(VerticalCenterScrollModal, { scrollable: true });
  }
  TooltipPopovers(TooltipPopoversModal: any) {
    this.modalService.open(TooltipPopoversModal, { centered: true });
  }

  Gridmodal(GridCenterModal: any) {
    this.modalService.open(GridCenterModal, { centered: true });
  }
  togglemodal(ToggleModal: any) {
    this.modalService.open(ToggleModal, { centered: true });
  }

  togglemodal2(ToggleModal2: any) {
    this.modalService.open(ToggleModal2, { centered: true });
  }

  openSm(SmallModal: any) {
    this.modalService.open(SmallModal, { size: 'sm' });
  }
  openXl(XlContentModal: any) {
    this.modalService.open(XlContentModal, { size: 'xl' });
  }
  openLg(LargeModal: any) {
    this.modalService.open(LargeModal, { size: 'lg' });
  }
  openFullscreen(FullscreenModal: any) {
    this.modalService.open(FullscreenModal, { fullscreen: true });
  }
  BelowSm(BelowSmModal: any) {
    this.modalService.open(BelowSmModal);
  }
  BelowMd(BelowMdModal: any) {
    this.modalService.open(BelowMdModal);
  }
  BelowLg(BelowLgModal: any) {
    this.modalService.open(BelowLgModal);
  }
  BelowXl(BelowXlModal: any) {
    this.modalService.open(BelowXlModal);
  }
  BelowXxl(BelowXxlModal: any) {
    this.modalService.open(BelowXxlModal);
  }
  Openmdo(OpenmdoModal: any) {
    this.modalService.open(OpenmdoModal);
  }
  Openfat(OpenfatModal: any) {
    this.modalService.open(OpenfatModal);
  }
  Opengetbootstrap(OpengetbootstrapModal: any) {
    this.modalService.open(OpengetbootstrapModal);
  }

    // Define modal options
    modalOptions: NgbModalOptions = {
      centered: true
    };

  
    private firstModalRef: any;
    private secondModalRef: any;
  
     openFirstModal(content1: any) {
    // Close the second modal if it's open
    if (this.secondModalRef) {
      this.secondModalRef.close();
    }

    // Open the first modal
    const modalRef = this.modalService.open(content1, this.modalOptions);
    this.firstModalRef = modalRef;

    modalRef.result.then((result) => {
      // Handle modal close event if needed
    }).catch((reason) => {
      // Handle modal dismiss event if needed
    });
  }

  openSecondModal(content1: any, content2: any) {
    // Close the first modal if it's open
    if (this.firstModalRef) {
      this.firstModalRef.close();
    }

    const modalRef = this.modalService.open(content2, this.modalOptions);
    this.secondModalRef = modalRef;

    modalRef.result.then((result) => {
      // Handle modal close event if needed
    }).catch((reason) => {
      // Handle modal dismiss event if needed
    });
  }
}
