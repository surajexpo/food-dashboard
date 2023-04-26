import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';
@Injectable({
  providedIn: 'root'
})
export class CurrentaffairsService {
  constructor(private http: HttpClient) {}

  addQuiz(body:object) {
   return   this.http.post(GlobalBaseurl.BASE_API_URL + 'qca/addquiz', body);
  }
  getAllQuiz(){
    return this.http.get(GlobalBaseurl.BASE_API_URL + 'qca/getallQuiz');
  }
  getByIdQuiz(id:string){
    return this.http.get(GlobalBaseurl.BASE_API_URL + 'qca/getquiz/'+id);
  }
  deleteQuiz(id:string){
    return this.http.delete(GlobalBaseurl.BASE_API_URL + 'qca/deletequiz/'+id);
  }
  updateQuiz(id:string,data:object){
    return this.http.put(GlobalBaseurl.BASE_API_URL + 'qca/updatequiz/'+id,data);
  }
  addQuestion(id:string,body:object) {
    return   this.http.post(GlobalBaseurl.BASE_API_URL + 'qca/addquestion/'+id, body);
   }
   deleteQuestion(id:string,quizId:string){
    return this.http.delete(GlobalBaseurl.BASE_API_URL + 'qca/deletequestion/'+quizId+'/'+id);
  }
}
