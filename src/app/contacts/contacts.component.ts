import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  SERVICE_ID = "service_drmnp1a";
  TEMPLATE_ID = "template_u7ezg7m";
  PUBLIC_KEY = "PdDYBKI1Yw6QG3ged";

  public sendEmail(e: Event) {
    emailjs.sendForm(this.SERVICE_ID, this.TEMPLATE_ID, e.target as HTMLFormElement, this.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
