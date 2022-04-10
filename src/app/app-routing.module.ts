import { JsonPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('./page-search/page-search.module').then((m) => m.PageSearchModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
