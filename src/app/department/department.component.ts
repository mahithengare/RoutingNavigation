import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router:Router) { }

  departmentList = [
    { id : 1, "name" : "Angular" },
    { id : 2, "name" : "MongoDB" },
    { id : 3, "name" : "NodeJS" },
    { id : 4, "name" : "HTML" },
    { id : 5, "name" : "SQL" }

]
  ngOnInit(): void {
  }
  onSelect(department:any){
this.router.navigate(['/departmentdetails',department.id]);
  }
}
