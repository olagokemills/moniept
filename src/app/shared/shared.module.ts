import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FooterDetailsComponent } from './footer-details/footer-details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    FooterComponent,
    FooterDetailsComponent,
  ]
})
export class SharedModule { }
