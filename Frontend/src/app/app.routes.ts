import { Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

export const routes : Routes = [
    {path: 'property-list', component: PropertyListComponent},
    {path: 'add-property', component: AddPropertyComponent},
    {path: 'property-detail/:id', component:PropertyDetailComponent},
    {path: '**', component:PropertyListComponent}
  ];
