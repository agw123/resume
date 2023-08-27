import { Component, HostBinding } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/LinkedIn_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/iconmonstr-github-1.svg")
    );
  }


  title = 'resume';
  iconSrc = '';

  private isDark = true;

  @HostBinding('class') get themeMode() {
    const bodyEl = document.body;
    if (this.isDark) {
      this.iconSrc = '/assets/dark-theme.svg';
      bodyEl.classList.add('bg-calm');
      bodyEl.classList.remove('bg-joy');
    } else {
      this.iconSrc = '/assets/light-theme.svg';
      bodyEl.classList.add('bg-joy');
      bodyEl.classList.remove('bg-calm');
    }
    return this.isDark ? 'theme-calm' : 'theme-joy';
  }

  themeSwitcher() {
    this.isDark = !this.isDark;
  }
}
