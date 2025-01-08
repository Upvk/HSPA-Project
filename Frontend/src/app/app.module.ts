import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyModule } from './property/property.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HosuingService } from './services/hosuing.service';
import { RouterModule } from '@angular/router';
import { routes } from 'app/app.routes';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  declarations: 
  [
    AppComponent,
    NavBarComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],

  imports: 
  [
    BrowserModule ,
    PropertyModule,
    RouterModule.forRoot(routes),
    FormsModule ,
    ReactiveFormsModule
  ],

  providers: 
  [
    provideHttpClient(withInterceptorsFromDi()),
    HosuingService
  ],

  bootstrap: [AppComponent]

})

export class AppModule {}
