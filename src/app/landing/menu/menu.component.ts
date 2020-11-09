import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public tabs = ['Особенности', 'Преимущества', 'Доставка', 'Оплата'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
