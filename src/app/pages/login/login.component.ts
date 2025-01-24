import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}

  login(event: any): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Event:', event);
  }
}
