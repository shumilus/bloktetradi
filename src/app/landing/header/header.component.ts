import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onScrollTo = new EventEmitter<string>();
  public isMobileMenuOpen: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  public scrollTo(link: string): void {
    this.onScrollTo.emit(link);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileMenuOpen = window.innerHeight > 768;
  }

}
