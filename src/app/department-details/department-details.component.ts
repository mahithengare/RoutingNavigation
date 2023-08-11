import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
public departmentID:any;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.departmentID = id;

    this.route.paramMap.subscribe((param : ParamMap) => {
    let id = param.get('id');
    if(id != null){
      let currentId = parseInt(id);
      this.departmentID = currentId;
    }
    
    })
  }
  goPrevious(){
  let previousID = this.departmentID - 1;
  this.router.navigate(['/departmentdetails',previousID]);
  }
  goNext(){
    let NextID = this.departmentID + 1;
    this.router.navigate(['/departmentdetails',NextID]);
    }  
}
