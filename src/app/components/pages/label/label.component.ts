import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { url } from '../../../app.router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, lastValueFrom } from 'rxjs';
import { debounceTime, findIndex } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../shared/services/toast.service';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    ColorPickerModule,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems = 0;

  // Search
  search: FormControl;
  searchUpdater = new Subject<string>();
  @ViewChild('filter', { static: false }) filter: any;

  // Data collections
  public storeLabels: any = [];


  labelForm: FormGroup;
  color: any = '#000000';

  public editID: any = null;

  constructor(
    private _baseService: BaseService,
    private loader: LoaderService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastService
  ) {
    this.search = new FormControl();
    this.searchUpdater
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => this.getAllLabels());

      this.labelForm = this.fb.group({
        name: ['', Validators.required],
      });
  }


  ngOnInit(): void {
    this.initializer();
  }
  /*---------------------------------
  Public  methods
  -----------------------------------*/
  /**
   * Method to get all quick replies
   */
  getAllLabels(): void {
    this.loader.showLoader();
    const params: any = {
      page: this.pageIndex,
      perPage: this.pageSize,
    };
    if (!!this.search.value) {
      params['search'] = this.search.value;
    }
    this._baseService.get(url.getAllLabel, params).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeLabels = response?.data?.labels
          this.totalItems = response.data.totalCount;
        }
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
        return;
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  searchTemp(event: any) {
    this.search.setValue(event.target.value);
    this.searchUpdater.next(this.filter.nativeElement.value);
  }

  onPageChange(event: any): void {
    this.pageIndex = event;
    this.getAllLabels();
  }

  resetSearch() {
    this.search.setValue('');
    this.searchUpdater.next('');
  }


  removeQuickReplies(id: any) {
    this.loader.showLoader();
    this._baseService.delete(url.deleteLabel + id).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getAllLabels();
          this.toastr.showToastMessage(response.message, 'success-style');
        }
      },
      error: (error) => {
        this.toastr.showToastMessage(error, 'error-style');
      },
      complete: () => {
        this.loader.hideLoader();
      },
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'md', centered: true });
  }


  submitLabel() {
    this.loader.showLoader();
    if (this.labelForm.valid) {
      let payload = {
        name : this.labelForm.get('name')?.value,
        color: this.color
      }

      const METHOD = this.editID ? 'put' : 'post'
      const URL = this.editID ? url.updateLabel + this.editID : url.saveLabel
      this._baseService[METHOD](URL, payload).subscribe({
        next: (response) => {
          if (response?.success) {
            this.toastr.showToastMessage(response.message, 'success-style');
            this.reset();
            this.getAllLabels();
            this.modalService.dismissAll();
          }
        },
        error: (error) => {
          this.toastr.showToastMessage(error, 'error-style');
          return;
        },
        complete: () => {
          this.loader.hideLoader();
        },
      });
    }
  }


  async editLabel(item: any, content: any) {
    if (content) {
      this.openModal(content);
    }
    this.editID = item.id;
    // API Calling for the Quick Reply
    try {
      const res = await this.getSingleQuickReply(this.editID);
      this.labelForm.get('name')?.setValue(res.name);
      this.color = res.color
    } catch (error) {
      console.error('Error fetching single quick reply:', error);
    }
  }

  /**
   * reset method
   */
  reset(): void {
    this.labelForm.reset();
    this.color = null 
    this.editID = null;
  }

 

  /*---------------------------------
  Private  methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private initializer(): void {
    this.getAllLabels();
  }

  /**
   * Get Single Quick Reply
   */
  private async getSingleQuickReply(id: number): Promise<any> {
    try {
      this.loader.showLoader();

      // Convert Observable to Promise using lastValueFrom
      const response = await lastValueFrom(
        this._baseService.get(url.getSingleLabel + id, {})
      );

      this.loader.hideLoader();

      if (response?.success) {
        return response.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error: any) {
      this.loader.hideLoader();
      this.toastr.showToastMessage(error, 'error-style');
      throw error; // Rethrow to handle errors in the calling function
    }
  }
}
