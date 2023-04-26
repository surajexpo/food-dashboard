import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';
@Injectable({
  providedIn: 'root'
})
export class CurrentaffairsService {
  constructor(private http: HttpClient) {}

  addDailyNews(title: string, discreption: string) {
    const body = {
      title: title,
      discreption: discreption,
    };
   return   this.http.post(GlobalBaseurl.BASE_API_URL + 'mca/addartical', body);
  }
  getAllNews(){
    return this.http.get(GlobalBaseurl.BASE_API_URL + 'mca/getallartical');
  }
  deleteNews(id:string){
    return this.http.delete(GlobalBaseurl.BASE_API_URL + 'mca/deleteartical/'+id);
  }
  updateNews(id:string,data:object){
    return this.http.put(GlobalBaseurl.BASE_API_URL + 'mca/updateartical/'+id,data);
  }
}
