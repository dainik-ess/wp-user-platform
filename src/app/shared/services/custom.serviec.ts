import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  setAttr(key: string, value: string): void {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, key, value);
    return;
  }
  
  removeAttr(key: string): void {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, key);
    return;
  }

  private editProductSubject = new Subject<any>();
  editProduct$ = this.editProductSubject.asObservable();

  setEditProduct(data: any) {
    this.editProductSubject.next(data);
  }
}
