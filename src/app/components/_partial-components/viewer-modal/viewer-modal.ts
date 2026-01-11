import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-modal',
  imports: [],
  templateUrl: './viewer-modal.html',
  styleUrl: './viewer-modal.css',
})
export class ViewerModal {

  @Input() src: string | undefined;
}
