import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ItemsFeedComponent } from './items-feed/items-feed.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { AuthService } from './auth.service';
import { CacheService } from './cache.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent, 
    ItemsFeedComponent,
    ItemComponent,
    LoginComponent,
    SignupComponent,
    ItemDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService, AuthService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
