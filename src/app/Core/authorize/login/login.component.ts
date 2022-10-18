import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl()
    });
  }
  login() {
    this.authService.login(this.myForm.getRawValue());
  }
}
