import { Injectable } from '@angular/core';
import { heading, subject } from '../../models/gk/gk';
import { quizsubject } from '../../models/gkquiz/quiz';
@Injectable({
  providedIn: 'root',
})
export class Shared {
  subject!: subject;
  quizSubject!: quizsubject;
  heading!: heading;
  quizData: any;
  setSubject(data: subject) {
    this.subject = data;
  }
  getSubject() {
    return this.subject;
  }
  setQuizSubject(data: subject) {
    this.quizSubject = data;
  }
  getQuizSubject() {
    return this.quizSubject;
  }
  setQuizData(data: any) {
    this.quizData = data;
  }
  getQuizData() {
    return this.quizData;
    
  }
  setHeading(data: heading) {
    this.heading = data;
  }
  getHeading() {
    return this.heading;
  }
}
