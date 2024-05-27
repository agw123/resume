import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('scrollDown', [
      state('true', style({ backgroundColor: '#e3d5ca' })),
      state('false', style({ backgroundColor: 'transparent' })),
      transition('false <=> true', animate(300))
    ])
  ],
})
export class MenuComponent implements OnInit {
  @Input() darkMode = false;
  @Output() themeMode = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<string>();

  iconSrc = '';

  ngOnInit() {
    this.themeSwitcher();
  }

  // Add background color to menu component on scroll, remove when it's on top
  // Check the hight of the app/section or if the view is scrolled down
  scrolled = false;
  //counter = 0;
  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    if (document.documentElement.scrollTop > 1) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  themeSwitcher() {
    this.darkMode = !this.darkMode;
    const bodyEl = document.body;
    if (this.darkMode) {
      this.iconSrc = '/assets/light-theme.svg';
      bodyEl.classList.add('bg-calm');
      bodyEl.classList.remove('bg-joy');
    } else {
      this.iconSrc = '/assets/dark-theme.svg';
      bodyEl.classList.add('bg-joy');
      bodyEl.classList.remove('bg-calm');
    }
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
