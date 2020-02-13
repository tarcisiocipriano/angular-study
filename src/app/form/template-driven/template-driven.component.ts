import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  @ViewChild('templateDrivenForm', { static: false }) templateDrivenForm: NgForm;

  genders = ['male', 'female'];

  defaultSecretQuestion = 'pet';

  answer = '';

  user = {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    secretAnswer: ''
  };

  submitted = false;

  setFormValue() {
    this.templateDrivenForm.setValue({
      userData: {
        username: 'Tarcísio Cipriano',
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
    this.templateDrivenForm.form.patchValue({
      userData: {
        username: 'Superuser'
      }
    });
  }

  resetForm() {
    this.templateDrivenForm.reset();
    this.templateDrivenForm.form.patchValue({
      userQuestion: {
        secretQuestion: this.defaultSecretQuestion
      }
    });
  }

  onSubmit() {
    // variable to show the output on template
    this.submitted = true;

    this.user = {
      username: this.templateDrivenForm.value.userData.username,
      email: this.templateDrivenForm.value.userData.email,
      gender: this.templateDrivenForm.value.userData.gender,
      secretQuestion: this.templateDrivenForm.value.userQuestion.secretQuestion,
      secretAnswer: this.templateDrivenForm.value.userQuestion.secretAnswer
    };

    this.resetForm();
  }

}
