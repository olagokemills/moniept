import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';

//lazily load pages module
const appRoutes: Routes = [
  { path: '',
    component:PagesComponent,
     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
