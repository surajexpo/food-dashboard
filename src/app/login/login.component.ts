import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthtokenService } from '../services/authtoken/authtoken.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopUpService } from '../services/popup/pop-up.service';

export interface LoginModal {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    is_active_email: boolean;
    role: string;
    term_and_condition: boolean;
    is_active: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private route: Router,
    private snack: MatSnackBar,
    private popup:PopUpService
  ) { }

  ngOnInit(): void { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get getControl() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.route.navigate(['/dashboard']);
    // const email: any = this.loginForm.controls['email'].value;
    // const password: any = this.loginForm.controls['password'].value;
    // const result = this.auth.login(email, password);
    // result.subscribe({
    //   next: (res: any) => {
    //     console.log(res);
    //     localStorage.setItem('key', res?.token);
    //     this.route.navigate(['/dashboard']);
    //   },
    //   error: (err) => {
    //     console.log('error messages', err.error.error);
    //     this.snack.open(err.error.error, 'ok', {
    //       horizontalPosition: 'right',
    //       verticalPosition: 'top',
    //       duration: 2000,
    //     });
    //   },
    // });
  }
  
}
