import { Router,  ActivatedRoute   } from '@angular/router';
import { Accounts } from './../../models/Accounts';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error : string | null
  users: Accounts = new Accounts();
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private accountService:AccountService,
    private cookie:CookieService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.users).subscribe((data: any) => {
      if(data != null) {
        this.users = data;
        this.cookie.set('email', this.users.email);
        this.cookie.set('password', this.users.password);
        this.cookie.set('first_name', this.users.first_name);
        this.cookie.set('last_name', this.users.last_name);
        this.cookie.set('phone', this.users.phone);
        this.cookie.set('token', this.users.token);
        //this.router.navigate(['/']);
        this.dialogRef.close();
      } 
    })   
  }
      
  submit() {
    this.users.email = this.form.value.email
    this.users.password = this.form.value.password
    this.login();
  }

}
