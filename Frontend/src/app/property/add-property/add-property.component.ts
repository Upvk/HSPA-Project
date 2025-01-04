import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: false,
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})

export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')
  addPropertyForm!: NgForm;

  constructor(private router : Router){}
 
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   console.log(this.addPropertyForm);
  }

  ngAfterViewInit(): void {
    console.log(this.addPropertyForm);
  }

  OnSubmit(Form : NgForm)
  {
   console.log("submitted!!!");
   console.log(Form);
  }
}
