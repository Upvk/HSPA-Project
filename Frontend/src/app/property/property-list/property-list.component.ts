import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone:false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private http:HttpClient){};

  ngOnInit(): void
  {
    this.http.get('data/properties.Json').subscribe
    (
      data=>
      {
        this.properties = data;
        console.log(data);
      }
    )
  }
}
