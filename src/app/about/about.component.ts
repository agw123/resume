import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { labels } from '../labels';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  panelOpenState = false;
  labels = labels;
  
  hardSkills: string[] = ['JAVA', 'J2EE', 'Spring/Spring Boot', 'SQL & MySQL/PostgreSQL', 'Angular Framework',
    'JavaScript/TypeScript',
    'HTML', 'CSS/SCSS',
    'Bootstrap/Angular Material/Ionic', 'Git',
    'Jira and Agile Methodologies'
  ];

  softSkills: string[] = [
    'Teamwork and peer programming', 'Ability to work independently', 
    'Problem solving', 'Fast learner', 'Attention to detail', 
    'Great communication skills', 'Flexibility and adaptability', 'Self-awareness'
  ];
}
