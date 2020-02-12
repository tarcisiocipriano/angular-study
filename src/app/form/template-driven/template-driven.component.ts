import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  @ViewChild('templateDrivenForm', { static: false }) signupForm: NgForm;

  genders = ['male', 'female'];

  defaultSecretQuestion = 'pet';

  answer = '';

  user = {
    userName: '',
    email: '',
    gender: '',
    secretQuestion: '',
    secretAnswer: ''
  };

  submitted = false;

  setFormValue() {
    this.signupForm.setValue({
      userData: {
        userName: 'Tarcísio Cipriano',
        email: 'contato@tarcisiocipriano.com',
        gender: 'male'
      },
      userQuestion: {
        secretQuestion: 'teacher',
        secretAnswer: 'Maximilian Schwarzmüller'
      }
    });
  }

  suggestUserName() {
    this.signupForm.form.patchValue({
      userData: {
        userName: 'Superuser'
      }
    });
  }

  resetForm() {
    this.signupForm.reset();
    this.signupForm.form.patchValue({
      userQuestion: {
        secretQuestion: this.defaultSecretQuestion
      }
    });
  }

  onSubmit() {
    // variable to show the output on template
    this.submitted = true;

    this.user = {
      userName: this.signupForm.value.userData.userName,
      email: this.signupForm.value.userData.email,
      gender: this.signupForm.value.userData.gender,
      secretQuestion: this.signupForm.value.userQuestion.secretQuestion,
      secretAnswer: this.signupForm.value.userQuestion.secretAnswer
    };

    this.resetForm();
  }

}
