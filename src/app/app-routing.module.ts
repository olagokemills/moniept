import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [];

//lazily load pages module
const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',
    component:PagesComponent,
     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'test',
    component:TestComponent,
  }
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
