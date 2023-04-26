import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  addQuiz(body: object) {
    return this.http.post(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/addquiz',
      body
    );
  }
  getAllQuiz(sId:string) {
    return this.http.post(GlobalBaseurl.BASE_API_URL + 'gkquiz/getallquiz',{sId:sId});
  }
  getByIdQuiz(id: string) {
    return this.http.get(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/getquiz/' + id
    );
  }
  deleteQuiz(id: string) {
    return this.http.delete(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/deletequiz/' + id
    );
  }
  updateQuiz(id: string, data: object) {
    return this.http.put(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/updatequiz/' + id,
      data
    );
  }
  addQuestion(id: string, data: object) {
    return this.http.post(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/addquestion/' + id,
      data
    );
  }
  deleteQuestion(id: string, quizId:string) {
    return this.http.delete(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/deletequestion/' +quizId+'/'+ id
    );
  }

  // getAllQuestion(){
  //   return this.http.
  // }
}
