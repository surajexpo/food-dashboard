import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
 
  getAllSubject(){
    return this.http.get(GlobalBaseurl.BASE_API_URL + 'subject/allsubjects');
  }
  addSubject(body:object) {
    return   this.http.post(GlobalBaseurl.BASE_API_URL + 'subject/addsubject', body);
   }
  deleteSubject(id:string) {
    return   this.http.delete(GlobalBaseurl.BASE_API_URL + 'subject/deletesubject/'+id);
   }
   updateSubject(id:string,body:object){
    return this.http.put(GlobalBaseurl.BASE_API_URL+'subject/updatesubject/'+id,body);

   }
}
