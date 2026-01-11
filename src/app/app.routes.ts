import { Routes } from '@angular/router';
import { Main } from './layout/main/main';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
    { path: '', component: Main, pathMatch: "full" },
    { path: 'projects', component: Projects, title: "Projects" },
    { path: '**', redirectTo: '' },
];
