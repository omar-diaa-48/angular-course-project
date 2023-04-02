import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  genders = ['male', 'female']
  subscriptions = ['basic', 'advanced', 'pro']

  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('male', Validators.required),
      'subscription': new FormControl('advanced', Validators.required),
    })
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
