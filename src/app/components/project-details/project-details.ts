import { Component, Input, signal } from '@angular/core';
import { IProjectDetail } from '../../core/interfaces/iproject';


@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {

  @Input() project!: IProjectDetail;
}

