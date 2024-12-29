import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyModule } from './property/property.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [	
    AppComponent,
    NavBarComponent
   ],
  imports: [BrowserModule , PropertyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
