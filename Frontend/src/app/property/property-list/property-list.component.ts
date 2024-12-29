import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone:false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {
  
  properties: Array<any> = 
  [
    {
      "Id":1,
      "Name": "Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name": "Cipla House",
      "Type":"Farm House",
      "Price":17000
    },
    {
      "Id":3,
      "Name": "Sharma House",
      "Type":"Flat",
      "Price":10000
    },
    {
      "Id":4,
      "Name": "Mishra House",
      "Type":"Building",
      "Price":50000
    },
    {
      "Id":5,
      "Name": "Velco Villa",
      "Type":"Villa",
      "Price":30000
    }
  ] 
}
