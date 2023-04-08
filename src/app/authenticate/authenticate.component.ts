import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html'
})
export class AuthenticateComponent {
  authForm: FormGroup;

  constructor() {
    this.authForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.authForm.value.email, this.authForm.value.password)
      .then((userCredential) => {
        console.log({ userCredential });
      })
      .catch((error) => {
        console.log({ error });
      });
  }
}
