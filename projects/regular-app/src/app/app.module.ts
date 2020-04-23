import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import * as fromBooks from './store/book.reducer';
import { BookEffects } from './store/book.effects';
import { LoadButtonComponent } from './shared/load-button.component';
import { ShowErrorComponent } from './shared/show-error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadButtonComponent,
    ShowErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature(fromBooks.bookFeatureKey, fromBooks.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([BookEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
