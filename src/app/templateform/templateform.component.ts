import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  simpleform= new FormGroup ({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(data:any){
    console.log(data);}

    collectdata(value:any){
      console.log(value);

    
    
  }

}
