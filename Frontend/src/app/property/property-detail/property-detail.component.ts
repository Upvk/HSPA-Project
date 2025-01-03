import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HosuingService } from 'app/services/hosuing.service';
import { IProperty } from '../iProperty.interface';

@Component({
  selector: 'app-property-detail',
  standalone:false,
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})

export class PropertyDetailComponent implements OnInit{
 
  propertyId!: string;
  propertyDetail : IProperty | undefined;

  constructor(private activatedRoute  : ActivatedRoute, private housingService : HosuingService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => { this.propertyId = params['id']; console.log('propertyId : '+this.propertyId) }
    );

    this.housingService.getPropertyDetail(this.propertyId).subscribe(
      {
        next: (v) => { console.log(v); }
      }
    );
  }
}
