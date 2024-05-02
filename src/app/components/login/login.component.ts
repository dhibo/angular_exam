import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route : Router){}
  registreForm!: FormGroup;

  showLogin() {
    this.route.navigateByUrl('/projects')
  }
  ngOnInit() {
    this.registreForm = new FormGroup({
      ln: new FormControl('',[Validators.pattern('^[A-Z].*'),Validators.minLength(3)]),
      ad: new FormControl('', [Validators.required,Validators.minLength(3)]),
    });
  }
}
