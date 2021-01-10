import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() onScrollTo = new EventEmitter<string>();
  public tabs = [{
    name: 'Тетради',
    link: 'goods',
  }, {
    name: 'Особенности',
    link: 'features',
  }, {
    name: 'Преимущества',
    link: 'advantages',
  }, {
    name: 'Доставка',
    link: 'delivery',
  }, {
    name: 'Оплата',
    link: 'payment',
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  public scrollTo(link: string): void {
    this.onScrollTo.emit(link);
  }

}
