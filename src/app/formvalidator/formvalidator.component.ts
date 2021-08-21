import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidator',
  templateUrl: './formvalidator.component.html',
  styleUrls: ['./formvalidator.component.css']
})
export class FormvalidatorComponent implements OnInit {

  loginform= new FormGroup({
    username: new FormControl,
    password: new FormControl
  })
  constructor() { }

  ngOnInit(): void {
  }

}
