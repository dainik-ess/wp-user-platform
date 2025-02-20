import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseService } from '../../../shared/services/base.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { url } from '../../../app.router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged, lastValueFrom } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../shared/services/toast.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    NgSelectModule,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 10;
  totalItems = 0;

  // Search
  search: FormControl;
  searchUpdater = new Subject<string>();
  @ViewChild('filter', { static: false }) filter: any;

  // Data collections
  public storeActions: any = [];

  actionForm: FormGroup;

  public editID: any = null;

  public storeQuickRepliesList: any = [];
  public selectedQuickReplies: any[] = [];
  public conversationID: string | null = null;

  constructor(
    private _baseService: BaseService,
    private loader: LoaderService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.search = new FormControl();
    this.searchUpdater
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => this.getAllActions());

    this.actionForm = this.fb.group({
      name: ['', Validators.required],
      timer: ['', Validators.required],
      quickReplyIds: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.conversationID = params.get('conversationID');
    });

    if (!this.conversationID) {
      this.router.navigate(['/pages/chat']);
    }
    console.log('this.conversationID: ', this.conversationID);

    this.initializer();
  }
  /*---------------------------------
  Public  methods
  -----------------------------------*/
  /**
   * Method to get all quick replies
   */
  getAllActions(): void {
    this.loader.showLoader();
    const params: any = {
      page: this.pageIndex,
      perPage: this.pageSize,
      conversationId: this.conversationID,
    };
    if (!!this.search.value) {
      params['search'] = this.search.value;
    }
    this._baseService.get(url.getAllAction, params).subscribe({
      next: (response) => {
        if (response?.success) {
          const actionsData = response?.data?.actions;
          const conversationData = response?.data?.conversationActions;

          const finalOutput = new Set(conversationData.map((item:any) => item.actionId));

          this.storeActions = actionsData.map((item:any) => ({
            ...item,
            ...(finalOutput.has(item.id) && {isSet:true})
          }));

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
    this.getAllActions();
  }

  resetSearch() {
    this.search.setValue('');
    this.searchUpdater.next('');
  }

  removeActions(id: any) {
    this.loader.showLoader();
    this._baseService.delete(url.deleteAction + id).subscribe({
      next: (response) => {
        if (response?.success) {
          this.getAllActions();
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
    if (this.actionForm.valid) {
      const METHOD = this.editID ? 'put' : 'post';
      const URL = this.editID ? url.updateAction + this.editID : url.saveAction;
      this._baseService[METHOD](URL, this.actionForm.value).subscribe({
        next: (response) => {
          if (response?.success) {
            this.toastr.showToastMessage(response.message, 'success-style');
            this.reset();
            this.getAllActions();
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

  async editActions(item: any, content: any) {
    if (content) {
      this.openModal(content);
    }
    this.editID = item.id;
    // API Calling for the Quick Reply
    try {
      const res = await this.getSingleQuickReply(this.editID);
      this.actionForm.get('name')?.setValue(res.name);
      this.actionForm.get('timer')?.setValue(res.timer);
      let quickReplyId = res.ActionQuickReplies.map((res: any) => {res
        return res.QuickReply;
      });

      this.actionForm.get('quickReplyIds')?.setValue(quickReplyId);
    } catch (error) {
      console.error('Error fetching single quick reply:', error);
    }
  }

  /**
   * reset method
   */
  reset(): void {
    this.actionForm.reset();
    this.editID = null;
  }

  setAction(actionData:any){
    this.loader.showLoader();
    let payload = {
      "actionId" : actionData.id,
      "conversationId" : this.conversationID
    }
    this._baseService.post(url.setAction, payload).subscribe({
      next: (response) => {
        if (response?.success) {
          this.toastr.showToastMessage(response.message, 'success-style');
          this.getAllActions();
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

  removeAction(actionData:any){
    this.loader.showLoader();
    let payload = {
      "actionId" : actionData.id,
      "conversationId" : this.conversationID
    }
    this._baseService.delete(url.removeAction + actionData.id).subscribe({
      next: (response) => {
        if (response?.success) {
          this.toastr.showToastMessage(response.message, 'success-style');
          this.getAllActions()
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

  /*---------------------------------
  Private  methods
  -----------------------------------*/

  /**
   * Method to initialize data
   */
  private initializer(): void {
    this.getAllActions();
    this.getQuickReplies();
  }

  /**
   * Get Single Quick Reply
   */
  private async getSingleQuickReply(id: number): Promise<any> {
    try {
      this.loader.showLoader();

      // Convert Observable to Promise using lastValueFrom
      const response = await lastValueFrom(
        this._baseService.get(url.getSingleAction + id, {})
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

  /**
   * Get Quick Replies ID
   */
  private getQuickReplies() {
    this.loader.showLoader();

    this._baseService.get(url.getAllQuickRepliesForList, {}).subscribe({
      next: (response) => {
        if (response?.success) {
          this.storeQuickRepliesList = response.data;
          console.log(
            'this.storeQuickRepliesList: ',
            this.storeQuickRepliesList
          );
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
