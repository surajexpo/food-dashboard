import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
 
  getAllQuestion(body:object){
    return this.http.post(GlobalBaseurl.BASE_API_URL + 'question/allquestions',body);
  }
  addQuestion(body:object) {
    return   this.http.post(GlobalBaseurl.BASE_API_URL + 'question/addquestion', body);
   }
  deleteQuestion(id:string) {
    return   this.http.delete(GlobalBaseurl.BASE_API_URL + 'question/deletequestion/'+id);
   }
   updateQuestion(id:string,body:object){
    return this.http.put(GlobalBaseurl.BASE_API_URL+'question/updatequestion/'+id,body);

   }
}
