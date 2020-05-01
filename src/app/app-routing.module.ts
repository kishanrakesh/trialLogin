import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Link3Component } from './link3/link3.component';
import { Link2Component } from './link2/link2.component';
import { Link1Component } from './link1/link1.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { 
    path: 'login', 
    component: LoginComponent, 
  /*  children: [
       {path: 'main', component: MainComponent},
       { path: 'link1', component: Link1Component},
       { path: 'link2', component: Link2Component},
       { path: 'link3', component: Link3Component},
    ]*/},
 { path: 'main', component: MainComponent},
  { path: 'link1', component: Link1Component},
  { path: 'link2', component: Link2Component},
  { path: 'link3', component: Link3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MainComponent, Link1Component, Link2Component, Link3Component]
