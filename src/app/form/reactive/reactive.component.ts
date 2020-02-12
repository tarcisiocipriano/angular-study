import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reative',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  signupForm: FormGroup;

  genders = ['male', 'female'];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      userData: this.fb.group({
        username: [null, Validators.required],
        email: [null, Validators.required]
      }),
      gender: 'male',
      hobbies: this.fb.array([])
    });

    // this.signupForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl(null, Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //   }),
    //   gender: new FormControl('male'),
    //   hobbies: new FormArray([])
    // });
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
