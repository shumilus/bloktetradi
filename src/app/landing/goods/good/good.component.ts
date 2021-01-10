import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IGood} from '../goods.component';

@Component({
  selector: 'app-good',
  templateUrl: './good.component.html',
  styleUrls: ['./good.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodComponent implements OnInit {
  @Input() good: IGood;

  constructor() {
  }

  ngOnInit(): void {
  }

}
