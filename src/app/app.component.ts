import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularForms';
  @ViewChild('myForm') form?: NgForm;
  onSubmit() {
    console.warn(this.form);
  }
}
