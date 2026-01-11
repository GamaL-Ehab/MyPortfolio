import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_cvik97a', 'template_6mv4fuw', e.target as HTMLFormElement, {
        publicKey: 'bXXLITbaUgV1Gx0QA',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
        },
        (error) => {
          // console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
