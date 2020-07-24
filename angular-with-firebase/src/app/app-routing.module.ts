import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", redirectTo: "employee", pathMatch: "full" },
  { path: "employee", component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
