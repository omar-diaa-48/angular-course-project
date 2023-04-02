import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'email': new FormControl(''),
      'gender': new FormControl('male'),
      'subscription': new FormControl('advanced'),
    })
  }

  onFormSubmit() { }
}
