import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ShowformComponent } from './showform/showform.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path:'', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'edit/:id', component:UserEditComponent},
  {path:'show/:id', component:ShowformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
