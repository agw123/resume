import { Component, DoCheck, OnInit, Renderer2 } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{

  title = "Agata's resume";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private renderer: Renderer2
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

  ngDoCheck() {
    const currentUrl = this.router.url;
    const footer = document.querySelector('footer');

    if (footer) {
      if (currentUrl !== '/home') {
        this.renderer.addClass(footer, 'overflow-bg');
      } else {
        this.renderer.removeClass(footer, 'overflow-bg');
      }
    }
  }
}
