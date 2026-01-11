import { Component } from '@angular/core';
import { ViewerModal } from '../_partial-components/viewer-modal/viewer-modal';

@Component({
  selector: 'app-experience',
  imports: [ViewerModal],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  certificates = [
    {
      id: 1,
      src: "./images/Certificates/frontend-route-certificate.png"
    },
    {
      id: 2,
      src: "/images/Certificates/Graduation certificate.jpeg"
    },
  ]

  src: string = '';
  setIndex(index: number) {
    this.src = this.certificates[index].src;
  }


}
