import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    isShowVideo: boolean;

    public goods = [1, 2, 3, 4];

    constructor() {
    }

    ngOnInit(): void {
    }

}
