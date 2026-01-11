import { Experience } from './../../components/experience/experience';
import { Component } from '@angular/core';
import { Home } from '../../components/home/home';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { RecentProjects } from '../../components/recent-projects/recent-projects';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-main',
  imports: [Home, About, Skills, RecentProjects, Experience, Contact],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
