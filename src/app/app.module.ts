import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { MenuComponent } from './landing/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
