import {Component, OnInit} from '@angular/core';
import { MutualService } from "../../mutual.service";

@Component({
  selector: 'app-list-dep',
  templateUrl: './list-dep.component.html',
  styleUrls: ['./list-dep.component.css']
})
export class ListDepComponent implements OnInit {

  constructor(private service:MutualService) {
  }

  DepartmentList: any=[];
  ModalTitle?:string;
  ActivateAddEditDepComponent:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.UpdateDepList();
  }

  addOnClicked(){
    this.dep= {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComponent = true;

  }

  editOnClicked(item:any) {
    this.dep = item;
    this.ModalTitle ="Edit Department";
    this.ActivateAddEditDepComponent = true;
  }

  closeOnClicked() {
    this.ActivateAddEditDepComponent = false;
    this.UpdateDepList();
  }

  UpdateDepList() {
    this.service.getDepList().subscribe(data=> {
      this.DepartmentList = data;
    });
  }

  deleteOnClicked(item:any) {
    if(confirm("Are you sure ??")) {
      this.service.deleteDep(item.DepartmentId).subscribe(data=> {
        alert(data.toString());
        this.UpdateDepList();
      });
    }
  }


}
