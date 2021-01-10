import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('payment') payment: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onScrollTo(elem: any): void {
    const test = document.getElementById(elem);
    console.log(test);
    test.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
