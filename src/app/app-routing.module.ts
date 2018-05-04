import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ItemsFeedComponent } from './items-feed/items-feed.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'items', component: ItemsFeedComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'items/:id', component: ItemDetailComponent },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }