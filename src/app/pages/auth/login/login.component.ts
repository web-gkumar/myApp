import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [IonicModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  otpSent = false;

  loginForm = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    otp: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  sendOtp() {
    if (this.loginForm.get('mobile')?.invalid) return;
    this.otpSent = true;
    this.loginForm.get('otp')?.setValidators([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ]);
    this.loginForm.get('otp')?.updateValueAndValidity();
    console.log('OTP sent to:', this.loginForm.value.mobile);
  }

  verifyOtp() {
    if (this.loginForm.invalid) return;
    console.log('Login success:', this.loginForm.value);
  }

}
