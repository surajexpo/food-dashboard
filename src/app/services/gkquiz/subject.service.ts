import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalBaseurl } from '../GlobalBaseUrl';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  addSubject(body: object) {
    return this.http.post(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/addsubject',
      body
    );
  }
  getAllsubject() {
    return this.http.get(GlobalBaseurl.BASE_API_URL + 'gkquiz/getallsubject');
  }
  getByIdQuiz(id: string) {
    return this.http.get(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/getsubject/' + id
    );
  }
  deleteSubject(id: string) {
    return this.http.delete(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/deletesubject/' + id
    );
  }
  updateSubject(id: string, data: object) {
    return this.http.put(
      GlobalBaseurl.BASE_API_URL + 'gkquiz/updatesubject/' + id,
      data
    );
  }

}
