import { Component, OnInit } from '@angular/core';
import { HosuingService } from 'app/services/hosuing.service';

@Component({
  selector: 'app-property-list',
  standalone:false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})

export class PropertyListComponent implements OnInit
{
  properties: any;

  constructor(private housingService: HosuingService){};

  ngOnInit(): void
  {
    this.housingService.getAllProperties().subscribe
    (
      data=>
      {
        this.properties = data;
        console.log(data);
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}
