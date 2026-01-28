import { Component, Input } from '@angular/core';
import { IProjectDetails } from '../../core/interfaces/iproject';


@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  @Input() project!: IProjectDetails;
}

