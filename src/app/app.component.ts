import { Component } from '@angular/core';
import {FormControl,FormGroup, FormArray,FormBuilder,Validators,NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectf2';
  loginform= this.fb.group ({
   username: new FormControl (null,Validators.required),
   password: new FormControl(null,Validators.required),
   Email: new FormControl(null,Validators.required),
   Adress: new FormControl(null, Validators.required),
   city: new FormControl(null, Validators.required)   
  })
  constructor (private fb: FormBuilder) {
  }
    submit()
  {
    console.log (this.loginform.value)
  }

  get email(){
    return this.loginform.get('email')
  }
}
