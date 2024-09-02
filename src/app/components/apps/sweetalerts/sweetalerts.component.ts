import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-sweetalerts',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sweetalerts.component.html',
  styleUrl: './sweetalerts.component.scss'
})
export class SweetalertsComponent {
  basicAlert() {
    Swal.fire({
      title: 'Hello This is Basic alert Message,',
      confirmButtonColor: '#6259ca',
    });
  }
  titleAlert() {
    Swal.fire('The Internet ?', 'That thing is still around ?', 'question');
  }
  ErrorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue ?</a>',
    });
  }
  LongWindowAlert() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image',
    });
  }
  Customealert() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }
  MultipleButtones() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result: { isConfirmed: any; isDenied: any }) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
  DialogAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  ConformAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
   parametersAlert() {
     const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
         confirmButton: 'btn btn-success me-1',
         cancelButton: 'btn btn-danger me-1',
       },
       buttonsStyling: false,
     });

     swalWithBootstrapButtons
       .fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, delete it!',

         cancelButtonText: 'No, cancel!',
         reverseButtons: true,
       })
       .then((result) => {
         if (result.isConfirmed) {
           swalWithBootstrapButtons.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           );
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
  ImageAlert() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: './assets/images/media/media-59.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }
  imageAlert1() {
    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: 'rgba(26,98,48,0.5) url(./assets/images/media/media-27.jpg)',
    });
  }
  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      confirmButtonColor: '#0162e8',
      timer: 2000,
      timerProgressBar: true,
    });
  }
   AjaxRequesrAlert() {
     Swal.fire({
       title: 'Submit your Github username',
       input: 'text',
       inputAttributes: {
         autocapitalize: 'off',
       },
       showCancelButton: true,
       confirmButtonText: 'Look up',
       allowOutsideClick: () => !Swal.isLoading(),
     }).then(
       (result) => {
         if (result.isConfirmed) {
           Swal.fire({
             title: `${result.value.login}'s avatar`,
             imageUrl: result.value.avatar_url,
           });
         }
       }
     );
   }
}
