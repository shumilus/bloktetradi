import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IGood} from '../goods.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent implements OnInit {
  @Input() good: IGood;

  linkToBonusPaymentMethodsHelp$: Observable<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onBuyClick() {
    console.log(this.good);
  }

}
