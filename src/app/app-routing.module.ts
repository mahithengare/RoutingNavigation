import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectiveComponent } from './directive/directive.component';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentComponent } from './department/department.component';
import { EmloyeesComponent } from './emloyees/emloyees.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
  // { path :'', component : BindingComponent},
  { path :'', redirectTo:'/binding', pathMatch:'full'},
  { path :'binding', component : BindingComponent},
  { path :'directive', component : DirectiveComponent},
  { path :'pipes', component : PipesComponent},
  { path :'service', component : ServiceComponent},
  { path :'department', component : DepartmentComponent},
  { path :'employee', component : EmloyeesComponent},
  { path :'departmentdetails/:id', component : DepartmentDetailsComponent},
  { path :'**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
                                  BindingComponent,
                                  PipesComponent,
                                  DirectiveComponent,
                                  ServiceComponent,
                                  DepartmentComponent,
                                  EmloyeesComponent,
                                  DepartmentDetailsComponent,
                                  PageNotFoundComponent
                                ]
