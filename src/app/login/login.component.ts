import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm !: FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

    })
  }

get fc(){
  return this.loginForm.controls;
}


  submit() {
    if (this.loginForm.valid) {
      // Form submission logic
      console.log('Login successful');
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  validationMessages = {
    email: {
      required: 'Email is required', 
      email:'Please provide valid email'
    },
    password:{
      required:'Password is Required',
      minlength:"Password Must be atleast 6 characters"
    }
  }


}
