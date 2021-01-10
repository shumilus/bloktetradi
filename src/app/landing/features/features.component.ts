import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  public featureToggle: boolean;
  private interval;

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
    this.interval = setInterval(() => {
      this.featureToggle = !this.featureToggle;
    }, 2000);
  }

  test() {
    console.log('kik');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
