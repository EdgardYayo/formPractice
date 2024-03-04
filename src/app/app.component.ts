import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('form') submitForm?: NgForm;
  defaultSub = 'advanced'
  user = {
    email: '',
    sub: '',
    password: ''
  }

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.user = {
      email: this.submitForm?.value.email,
      sub: this.submitForm?.value.subscription,
      password: this.submitForm?.value.password
    }

    this.submitForm?.reset()
  }
}
