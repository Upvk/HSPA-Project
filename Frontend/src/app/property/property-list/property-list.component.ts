import { Component, OnInit } from '@angular/core';
import { HosuingService } from 'app/services/hosuing.service';
import { IProperty } from '../iProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone:false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})

export class PropertyListComponent implements OnInit
{
  SellRent = 1;
  properties: Array<IProperty> = [];

  constructor(private route : ActivatedRoute, private housingService: HosuingService){};

  ngOnInit(): void
  {
    if(this.route.snapshot.url.toString())
    {
      this.SellRent = 2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe
    (
      {
        next: (v) => {this.properties = v; console.log(v);},
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    )
  }
}