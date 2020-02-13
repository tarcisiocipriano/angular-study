import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-reative',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  reactiveForm: FormGroup;

  genders = ['male', 'female'];

  defaultSecretQuestion = 'pet';

  answer = '';

  user = {
    userName: '',
    email: '',
    gender: '',
    secretQuestion: '',
    secretAnswer: '',
    hobbies: []
  };

  submitted = false;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      userData: this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        gender: 'male'
      }),
      userQuestion: this.fb.group({
        secretQuestion: [this.defaultSecretQuestion, Validators.required],
        secretAnswer: [null, Validators.required],
        hobbies: this.fb.array([])
      }),
    });

    // this.reactiveForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //   }),
    //   gender: new FormControl('male'),
    //   hobbies: new FormArray([])
    // });
  }

  setFormValue() {
    this.reactiveForm.setValue({
      userData: {
        userName: 'Tarcísio Cipriano',
        email: 'contato@tarcisiocipriano.com',
        gender: 'male'
      },
      userQuestion: {
        secretQuestion: 'teacher',
        secretAnswer: 'Maximilian Schwarzmüller',
        hobbies: []
      }
    });
  }

  suggestUserName() {
    this.reactiveForm.patchValue({
      userData: {
        userName: 'Superuser'
      }
    });
  }

  resetForm() {
    this.reactiveForm.reset();
    this.reactiveForm.patchValue({
      userQuestion: {
        secretQuestion: this.defaultSecretQuestion
      }
    });
  }

  get controls() {
    return (this.reactiveForm.get('userQuestion.hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = this.fb.control(null, Validators.required);
    (this.reactiveForm.get('userQuestion.hobbies') as FormArray).push(control);
  }

  onSubmit() {
    this.submitted = true;

    this.user = {
      userName: this.reactiveForm.value.userData.userName,
      email: this.reactiveForm.value.userData.email,
      gender: this.reactiveForm.value.userData.gender,
      secretQuestion: this.reactiveForm.value.userQuestion.secretQuestion,
      secretAnswer: this.reactiveForm.value.userQuestion.secretAnswer,
      hobbies: this.reactiveForm.value.userQuestion.hobbies
    };

    this.resetForm();
  }

}
