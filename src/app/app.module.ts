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
import { BuyButtonComponent } from './landing/goods/good/buy-button/buy-button.component';
import { DeliveryComponent } from './landing/delivery/delivery.component';
import { ArrowComponent } from './landing/arrow/arrow.component';
import { PaymentComponent } from './landing/payment/payment.component';
import { FeedbackComponent } from './landing/feedback/feedback.component';

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
    BuyButtonComponent,
    DeliveryComponent,
    ArrowComponent,
    PaymentComponent,
    FeedbackComponent,
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
