import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import './components/exports';
import { BktSharedService } from './services/bkt-shared.service';



@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    BktSharedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BktSharedModule { }
