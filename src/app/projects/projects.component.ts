import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { labels } from '../labels';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  labels = labels;
  
  constructor(
    private scroller: ViewportScroller, 
    private router: Router) { }

    menuOpen = false;
  ngOnInit() {
  }

}
