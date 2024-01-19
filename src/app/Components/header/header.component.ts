import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:click', ['event'])
  clickout(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event)) {
      this.isMenuVisible = false;
    }
  }

  @HostListener('window:keydown.escape', ['event'])
  onEscape(event: KeyboardEvent) {
    this.isMenuVisible = false;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
