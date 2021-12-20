export interface Iemployee{
    id:number;
    imageUrl:string,
        firstName:string,
        lastName: string
        email:string,
        contactNumber:string,
        age: number
        dob: string
        salary: number
        address: string   
}
export class employeemodal{
    id:number=0;
    imageUrl:string='';
        firstName:string='';
        lastName: string='';
        email:string='';
        contactNumber:string='';
        age: number=0;
        dob: string='';
        salary: number=0;
        address: string ='';  
}
