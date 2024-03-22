import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MutualService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/galerie/";
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDep(val:any) {
    return this.http.post(this.APIUrl + '/department/',val);
  }

  updateDep(val:any) {
    return this.http.put(this.APIUrl + '/department/',val);
  }

  deleteDep(val:any) {
    return this.http.delete(this.APIUrl + '/department/' +val);
  }

  // Student

  getStudentList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/student/');
  }

  addStudent(val:any) {
    return this.http.post(this.APIUrl + '/student/',val);
  }

  updateStudent(val:any) {
    return this.http.put(this.APIUrl + '/student/',val);
  }

  DeleteStudent(val:any) {
    return this.http.delete(this.APIUrl + '/student/' +val);
  }

  UploadPhoto(val:any) {
    return this.http.post(this.APIUrl + /SavePhoto/ , val)
  }

  getAllDepName():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }
}
