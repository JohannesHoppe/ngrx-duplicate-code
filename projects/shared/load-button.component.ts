import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Status } from '../regular-app/src/app/store/book.reducer';


@Component({
  selector: 'app-load-button',
  template: `
    <button class="btn btn-primary" (click)="btnClick.emit()">
    <span class="load"
        [ngClass]="{ 'spinner-border-sm spinner-border': status === Status.Submitting }"></span>
      <ng-content></ng-content>
  </button>
  `
})
export class LoadButtonComponent {

  Status = Status;

  @Output()
  btnClick = new EventEmitter();

  @Input()
  status: Status;

}
