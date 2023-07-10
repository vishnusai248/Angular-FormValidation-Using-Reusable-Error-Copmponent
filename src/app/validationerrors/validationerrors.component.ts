import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-validationerrors',
  templateUrl: './validationerrors.component.html',
  styleUrls: ['./validationerrors.component.scss']
})
export class ValidationerrorsComponent {
  @Input() control !: FormControl | AbstractControl
  @Input() errorMessages !: Object
  
  constructor(public formDirective:FormGroupDirective){
    console.log("messeges:",this.errorMessages)
  }
}
