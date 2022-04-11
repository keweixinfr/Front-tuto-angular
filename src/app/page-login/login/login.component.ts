import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { 
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required), //逻辑上的require 区别于input标签里面的required
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
    }
  }

}
