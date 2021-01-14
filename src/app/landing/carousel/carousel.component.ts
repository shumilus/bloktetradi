import {Component, HostListener, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public mobileView: boolean;

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    responsiveClass: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      // 480: {
      //   items: 2
      // },
      // 940: {
      //   items: 3
      // }
    },
    // nav: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileView = window.innerHeight > window.innerWidth;
  }

}
