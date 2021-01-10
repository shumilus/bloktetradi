import {Component, OnInit} from '@angular/core';

export interface IGood {
  name: string;
  img: number;
  price: number;
}

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})


export class GoodsComponent implements OnInit {
  public goods: IGood [] = [
    {name: 'Color Stag', img: 6, price: 155},
    {name: 'Bunny', img: 7, price: 155},
    {name: 'Icecream', img: 8, price: 155},
    {name: 'My Notebook', img: 9, price: 155},
    {name: 'Сова', img: 10, price: 155},
    {name: 'Фрукты', img: 1, price: 150},
    {name: 'Пейзаж', img: 2, price: 150},
    {name: 'Моноколор Blue', img: 3, price: 175},
    {name: 'Dogs', img: 4, price: 205},
    {name: 'Joy', img: 5, price: 395},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  trackBy(i): number {
    return i;
  }

}
