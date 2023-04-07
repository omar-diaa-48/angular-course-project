import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BE_URL } from 'src/app/shared/constants';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postForm: FormGroup;

  constructor(private http: HttpClient) {
    this.postForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'content': new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.http.post(`${BE_URL}/posts.json`, this.postForm.value)
      .subscribe((response) => {
        console.log({ response });
        this.postForm.reset();
      })
  }
}
