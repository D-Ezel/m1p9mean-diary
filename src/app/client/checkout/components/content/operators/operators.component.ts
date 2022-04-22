import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  first_name: string = this.cookie.get("first_name");
  last_name: string = this.cookie.get("last_name");

  form: FormGroup = new FormGroup({
    numberPhone: new FormControl(''),
    phoneToReceiveCode: new FormControl(this.cookie.get("phone")),
    codeSecret: new FormControl('')
  })

  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }

  cancel(){}

  submit() {

  }

}
