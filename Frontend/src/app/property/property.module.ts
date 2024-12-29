import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card/property-card.component';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  declarations: [PropertyCardComponent, PropertyListComponent], // Declare the component
  exports: [PropertyCardComponent, PropertyListComponent], // Export it so that other components can use it
  imports : [CommonModule]
})

export class PropertyModule {}
