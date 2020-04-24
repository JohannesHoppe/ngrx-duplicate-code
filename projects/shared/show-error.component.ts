import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-show-error',
  template: `
    <div *ngIf="error" class="alert alert-danger">
      {{ error.message }}
    </div>
  `
})
export class ShowErrorComponent {

  @Input()
  error: HttpErrorResponse;
}
