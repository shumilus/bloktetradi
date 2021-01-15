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
    this.isMobileMenuOpen = false;
    this.isMobileMenuOpen = false;
    this.onScrollTo.emit(link);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

}
