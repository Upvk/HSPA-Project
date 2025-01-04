import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// const propertyRoute : Routes = [
//   {path: '', component: PropertyListComponent},
//   {path: 'add-property', component: AddPropertyComponent}
// ];

@NgModule({
  declarations: [PropertyCardComponent, PropertyListComponent, AddPropertyComponent, PropertyDetailComponent], // Declare the component
  exports: [PropertyCardComponent, PropertyListComponent, AddPropertyComponent, PropertyDetailComponent], // Export it so that other components can use it
  imports : [CommonModule,
   RouterModule, //To work routeLink inside sub-component template
   FormsModule
    ]
})

export class PropertyModule {}
