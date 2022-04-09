import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    numberPhone: new FormControl(''),
    codeSecret: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){}

  submit() {

  }

}
