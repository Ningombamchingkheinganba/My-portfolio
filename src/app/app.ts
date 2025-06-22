import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { Hero } from './component/hero/hero';
import { About } from './component/about/about';
import { Projects } from './component/projects/projects';
import { Experience } from './component/experience/experience';
import { Contact } from './component/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-Resume';
}
