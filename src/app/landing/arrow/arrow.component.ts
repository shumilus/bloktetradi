import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
