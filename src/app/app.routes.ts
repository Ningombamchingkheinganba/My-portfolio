import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Projects } from './component/projects/projects';
import { Experience } from './component/experience/experience';
import { Contact } from './component/contact/contact';
import { Hero } from './component/hero/hero';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'contact', component: Contact },
  { path: 'hero', component: Hero },
  { path: '**', redirectTo: '' }, // fallback
];
