import { Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes : Routes = 
[
    {path: 'property/list', component: PropertyListComponent},
    {path: 'property/add', component: AddPropertyComponent},
    {path: 'property/detail/:id', component:PropertyDetailComponent},
    {path: 'user/login', component:UserLoginComponent},
    {path: 'user/register', component:UserRegisterComponent},
    //this '**' path should always be last!
    {path: '**', component:PropertyListComponent}
];
