import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {pluck} from 'rxjs/operators';
import {from} from 'rxjs';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicImg') dynamicImg: ElementRef;
  private interval;
  public degrees: string;
  public value = 0;

  constructor() {
  }

  ngOnInit(): void {
    // let test = 1;
    // let directionUp = true;
    this.interval = setInterval(() => {
      // if (test === 30) {
      //   test = 0;
      //   directionUp = !directionUp;
      // }
      //
      // if (test === 0) {
      //   directionUp = !directionUp;
      // }
      // if (directionUp) {
      //   ++test;
      //   this.degrees = `rotate(${++this.value}deg)`;
      // } else {
      //   --test;
      //   this.degrees = `rotate(${--this.value}deg)`;
      // }
      this.degrees = `rotate(${++this.value}deg)`;
    }, 300);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
