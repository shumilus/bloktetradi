import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { CarouselComponent } from './landing/carousel/carousel.component';
import { MenuComponent } from './landing/menu/menu.component';
import { FeaturesComponent } from './landing/features/features.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { FooterComponent } from './landing/footer/footer.component';
import { VideoBlockComponent } from './landing/video-block/video-block.component';
import { AdvantagesComponent } from './landing/advantages/advantages.component';
import { GoodsComponent } from './landing/goods/goods.component';
import { GoodComponent } from './landing/goods/good/good.component';
import { HamburgerButtonComponent } from './landing/hamburger-button/hamburger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    FeaturesComponent,
    FooterComponent,
    VideoBlockComponent,
    AdvantagesComponent,
    GoodsComponent,
    GoodComponent,
    HamburgerButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
