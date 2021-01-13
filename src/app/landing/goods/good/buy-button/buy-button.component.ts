import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BuyButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<boolean>();
  @ViewChild('button') button: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  animateButton(elem) {
    elem.preventDefault();
    this.button.nativeElement.classList.remove('animate');

    elem.target.classList.add('animate');
    setTimeout(() => {
      elem.target.classList.remove('animate');
    }, 700);

    this.onClick.emit(true);
  }

}
