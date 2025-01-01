import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';

const propertyRoute : Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent}
];

@NgModule({
  declarations: [PropertyCardComponent, PropertyListComponent, AddPropertyComponent], // Declare the component
  exports: [PropertyCardComponent, PropertyListComponent, AddPropertyComponent], // Export it so that other components can use it
  imports : [CommonModule, RouterModule.forRoot(propertyRoute)]
})

export class PropertyModule {}
