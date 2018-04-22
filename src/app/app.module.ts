import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ItemsFeedComponent } from './items-feed/items-feed.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

 
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent, 
    ItemsFeedComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
