import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';
import { heading } from '../../models/gk/gk'

@Injectable({
  providedIn: 'root'
})
export class HeadingService {
  constructor(private http: HttpClient) { }
  addHeading(body:object) {
   return   this.http.post(GlobalBaseurl.BASE_API_URL + 'heading/addheading', body);
  }
  getAllHeading(data:object){
    console.log('service id ',data);
    return this.http.post(GlobalBaseurl.BASE_API_URL + 'heading/allheadings',data);
  }
  deleteHeading(id:string){
    return this.http.delete(GlobalBaseurl.BASE_API_URL + 'heading/deleteheading/'+id);
  }
  updateHeading(id:string,body:object){
    return this.http.put(GlobalBaseurl.BASE_API_URL + 'heading/updateheading/'+id,body);
  }

}
