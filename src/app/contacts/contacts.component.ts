import { Component, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgForm } from '@angular/forms';
import { labels } from '../labels';

const SERVICE_ID = "service_drmnp1a"; 
const TEMPLATE_ID = "template_u7ezg7m"; 
const PUBLIC_KEY = "PdDYBKI1Yw6QG3ged";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  labels = labels;

  constructor(public dialog: MatDialog) {
  }

  @ViewChild('contactForm') form: NgForm | undefined;
  msgSend = false;

  public sendEmail(contactForm: NgForm, e: Event) {
    if (contactForm.valid) {
      const formValues = contactForm.value;
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.openDialog(result.status);
        this.form?.reset();
      }, (error) => {
        console.log(error.text);
        this.openDialog(error.text);
      });
    } else {
      console.log('Form is invalid');
    }
  }


  openDialog(status: Number) {
    this.dialog.open(DialogComponent, {
      data: {
        name: this.form?.value.name,
        status: status
      },
    });
  }
}
