import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const suffixTitle = 'Agata Wisniewska Web Developer';

const routes: Routes = [
  { path: '',component: HomeComponent, title: 'Home' + ' ' + suffixTitle },
  { path: 'home', component: HomeComponent, title: 'Home' + ' ' + suffixTitle},
  { path: 'about', component: AboutComponent, title: 'About' + ' ' + suffixTitle },
  { path: 'projects', component: ProjectsComponent, title: 'Projects' + ' ' + suffixTitle },
  { path: 'contact', component: ContactsComponent, title: 'Contact' + ' ' + suffixTitle },
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' + ' ' + suffixTitle }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
