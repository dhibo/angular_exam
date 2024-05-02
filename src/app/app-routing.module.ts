import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DetailstaskComponent } from './components/detailstask/detailstask.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'tasks',component:TasksComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'addtask/:id',component:AddTaskComponent},
  {path:'detailstask/:id',component:DetailstaskComponent},
  {path:'**', component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
