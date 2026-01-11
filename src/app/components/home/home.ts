import { Component } from '@angular/core';
import { ViewerModal } from '../_partial-components/viewer-modal/viewer-modal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
