import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    isShowVideo: boolean;

    public goods = [
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

}
