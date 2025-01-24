import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchingpassword } from '../../util/validators/validators-function.validator';


@Component({
  selector: 'app-user-register',
  standalone: false,
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(){};

  ngOnInit(): void {
    this.registrationForm = new FormGroup(
      {
        userName : new FormControl('', Validators.required),
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword : new FormControl('', [Validators.required]),
        mobileNumber : new FormControl('', [Validators.minLength(10)])
      }, 
      { validators: matchingpassword() } // Apply the custom validat]or to the FormGroup
    );
  }

  OnSubmit()
  {
    console.log(this.registrationForm);
  }

  //Getter Methods

  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email()
  {
    return this.registrationForm.get('email') as FormControl;
  }

  get mobileNumber()
  {
    return this.registrationForm.get('mobileNumber') as FormControl;
  }

  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword()
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
}
