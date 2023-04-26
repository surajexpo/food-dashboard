export interface quizsubject {
    name: string;
    _id:string;
    admin:string;
    createdAt:Date;
    updatedAt:Date;
  }
  export interface quiz {
    name: string;
    sId:string;
    _id:string;
    admin:string;
    createdAt:Date;
    updatedAt:Date;
  }
  export interface question {
    question: string;
    hId:string;
    answer:string;
    _id:string;
  }