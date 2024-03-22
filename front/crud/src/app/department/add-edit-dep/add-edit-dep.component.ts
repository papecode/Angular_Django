import {Component, Input, OnInit} from '@angular/core';
import {MutualService} from "../../mutual.service";

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit{

  constructor(private service:MutualService) {
  }

  @Input() dep: any;
  DepartmentId?:string;
  DepartmentName?:string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    let val = {DepartmentId:this.DepartmentId,
      DepartmentName: this.DepartmentName};
    this.service.addDep(val).subscribe(res=> {
      alert(res.toString());
    });
  }

  updateDepartment() {
    let val = {DepartmentId:this.DepartmentId,
      DepartmentName: this.DepartmentName};
    this.service.addDep(val).subscribe(res=> {
      alert(res.toString());
    });
  }
}
