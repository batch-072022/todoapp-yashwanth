import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LinkusersComponent } from './linkusers/linkusers.component';

const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'linkusers',component:LinkusersComponent},
  {path:'edittask',component:EdittaskComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
