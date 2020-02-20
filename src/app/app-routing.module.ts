import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '',redirectTo : 'home',pathMatch: 'full'},
  {path: 'home', component:DashboardComponent},
  {path: 'add', component:AddComponent},
  {path: 'home/computer/:id', component:DetailComponent},
  {path: 'home/edit/computer/:id', component:EditComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
