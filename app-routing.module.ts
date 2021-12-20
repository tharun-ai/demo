import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmpdetailsComponent} from './empdetails/empdetails.component';
import {CreateempComponent} from './empdetails/createemp/createemp.component';
import  {ReactiveempComponent} from './reactiveemp/reactiveemp.component' 
//import {RoutegaurdService} from './routegaurd.service';
import {ViewemployeeComponent} from  './viewemployee/viewemployee.component'
const routes: Routes = [
  {path:'emplist',
  component:EmpdetailsComponent,
  //canDeactivate:[RoutegaurdService]
},
   {path:'create/:id',component:CreateempComponent},
   {path:'reactivemp',component:ReactiveempComponent},
   {path:'employee/:id',component:ViewemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
