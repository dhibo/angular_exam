import { Component } from '@angular/core';
import { Project } from 'src/app/core/models/projects';
import { ConsService } from 'src/app/services/cons.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
constructor(private service:ConsService){}
listProjects:Project[] = [];
ngOnInit(){
  this.service.getprojects().subscribe((result)=>{
    this.listProjects = result
  })
}

}
