import { Component, OnInit } from '@angular/core';
import { HosuingService } from 'app/services/hosuing.service';
import { IProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-list',
  standalone:false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})

export class PropertyListComponent implements OnInit
{
  properties: Array<IProperty> = [];

  constructor(private housingService: HosuingService){};

  ngOnInit(): void
  {
    this.housingService.getAllProperties().subscribe
    (
      {
        next: (v) => {this.properties = v; console.log(v);},
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    )
  }
}