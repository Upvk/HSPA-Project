import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { IProperty } from 'app/property/iProperty.interface';

@Injectable({
  providedIn: 'root'
})

export class HosuingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent : number) : Observable<IProperty[]>
  {
    return this.http.get<{[key:string]:IProperty}>('data/properties.Json').pipe(
      map(data=>
      {
        const propertiesArray: Array<IProperty> = [];
        for(const id in data)
        {
          if(data.hasOwnProperty(id) && SellRent == data[id].SellRent)
          {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      }
      )
    );
  }

  getPropertyDetail(propertyId : number) 
  {
    return this.http.get<{[key:string]:IProperty}>('data/properties.Json').pipe(
      map(data=>
      {
        let propertyData : IProperty | undefined;
        for(const id in data)
        {
          if(data[id].Id == Number(propertyId))
          {
            propertyData = data[id];
          }
        }
        return propertyData;
      }
      )
      )
  }
}
