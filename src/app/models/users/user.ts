export interface user{
    token:string;
    user:{
        _id:string;
        name:string;
        email:string;
        password:string;
        is_active_email:string;
        role:string;
        term_and_condition:string;
        is_active:string;
        createdAt:Date;
        updatedAt:Date;

    }
}