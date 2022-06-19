import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [ 
    // { path: 'first-component', component: FirstComponent },
  {
    path:'**',
    component: ContactComponent
  }
];

@NgModule({
  imports: [CommonModule,
            BrowserModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
