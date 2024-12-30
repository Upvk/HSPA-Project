import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyModule } from './property/property.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { HttpClientModule } from '@angular/common/http'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HosuingService } from './services/hosuing.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
   ],
  imports: [BrowserModule , PropertyModule],
  providers: [provideHttpClient(withInterceptorsFromDi()), HosuingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
