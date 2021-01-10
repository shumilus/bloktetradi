import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onScrollTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public scrollTo(link: string): void {
    this.onScrollTo.emit(link);
  }

}
