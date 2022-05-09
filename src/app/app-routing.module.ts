import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
{path:"",component:LoginComponent},
{path:"EmployeDashboard",component:EmpdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }