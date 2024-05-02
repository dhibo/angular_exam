import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/tasks';
import { ConsService } from 'src/app/services/cons.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  constructor(private cons:ConsService , route : Router){}
  listTasks : Task[]=[]
  ngOnInit(){
    this.cons.gettasks().subscribe((res)=>
    {
      this.listTasks = res ; 
    });
  }
}
