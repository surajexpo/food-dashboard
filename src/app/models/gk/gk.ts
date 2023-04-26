export interface subject {
    name: string;
    _id:string;
    admin:string;
    createdAt:Date;
    updatedAt:Date;
  }
  export interface heading {
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