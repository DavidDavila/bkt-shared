import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BktSharedModule } from '../../../bkt-shared/src/lib/bkt-shared.module';
import { AppComponent } from './app.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BktSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
