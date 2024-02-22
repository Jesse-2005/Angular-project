import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { SearchComponent } from './product-list/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    UsersComponent,
    MessageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
