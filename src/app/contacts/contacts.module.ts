import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxPaginationModule,
    // StoreModule.forRoot({})
  ],
  providers: []
})
export class ContactsModule { }
