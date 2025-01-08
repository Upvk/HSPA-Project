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

  registerationForm!: FormGroup;

  constructor(){};

  ngOnInit(): void {
    this.registerationForm = new FormGroup(
      {
        name : new FormControl('', [Validators.required, Validators.minLength(5)]),
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('', [Validators.required, Validators.minLength(5)]),
        confirmPassword : new FormControl('', [Validators.required, Validators.minLength(5)]),
        mobileNumber : new FormControl('', [Validators.minLength(10)])
      }, 
      { validators: matchingpassword } // Apply the custom validator to the FormGroup
    );
  }

  OnSubmit()
  {
    console.log(this.registerationForm);
  }
}
