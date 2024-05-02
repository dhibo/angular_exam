import { Injectable } from '@angular/core';
import { Project } from '../core/models/projects';
import { HttpClient } from '@angular/common/http';
import { Task } from '../core/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class ConsService {

  constructor( private http: HttpClient) { }
  getprojects(){
    return this.http.get<Project[]>('http://localhost:3000/projects')
  }
  
  gettasks(){
    return this.http.get<Task[]>('http://localhost:3000/tasks')
 
  }
  addtask(task:Task){
    return this.http.post('http://localhost:3000/tasks',task)
  }

  updateProduct(task:Task,id:number){
    return this.http.put('http://localhost:3000/products'+'/'+id,task)
  }
}
