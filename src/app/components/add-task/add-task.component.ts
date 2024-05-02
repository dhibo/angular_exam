import { Component } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/tasks';
import { ConsService } from 'src/app/services/cons.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private act : ActivatedRoute , private service : ConsService ,private route : Router){}
  task!: FormGroup;
  id!:number

  ngOnInit(){
    this.task= new FormGroup({
      title: new FormControl('',),
      dateF: new FormControl('',),
      dateD:new FormControl('',),
      

    });
}
Add(data : any ){
  data['status']="TO DO "
  data['project']= this.act.snapshot.params['id'];
  this.service.addtask(data).subscribe((result)=>{
    this.route.navigateByUrl('/tasks')

  })
}
}
