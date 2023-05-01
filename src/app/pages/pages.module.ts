import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';


//routes for pages module
const pagesRoutes = [
    { path: 'details', component: DetailsComponent },
    { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(pagesRoutes),
  ]
})
export class PagesModule { }
