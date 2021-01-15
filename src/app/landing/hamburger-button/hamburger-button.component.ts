import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent implements OnInit {
  @Input() isOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth > 768) {
      this.isOpen = false;
    }
  }

}
