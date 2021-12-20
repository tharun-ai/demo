import { Injectable } from '@angular/core';
import empdata from '../empdetails/empdata.json';
import {BehaviorSubject,Subject} from 'rxjs'
import {Iemployee} from '../empdetails/i.employee';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class EmplistService {
 public  emplist!:Iemployee[];
  constructor(private http:HttpClient) {

   // this.getemployeelist();
   }
    readonly baseURL='http://localhost:3000/comments';
   getemployees():Observable<Iemployee[]>{
     return this.http.get('http://localhost:3000/comments').pipe(map((res)=> {return this.emplist= <Iemployee[]>res;}));
   }
   postemploye(emp:Iemployee):Observable<Iemployee[]>{
         return this.http.post('http://localhost:3000/comments',emp).pipe(map((res)=> {return this.emplist=<Iemployee[]>res;}));
   }
   pid!:string
   deleteemploye(emp:Iemployee){
       return this.http.delete('http://localhost:3000/comments/'+emp.id).pipe(map((res)=> {console.log(res);return res;}));
   }
   updateemployee(emp:Iemployee,id:number){
      return this.http.put('http://localhost:3000/comments/'+id,emp).pipe(map((res)=> {console.log(res);return res;}));
   }
    getemployeelist():Iemployee[]{
      return this.emplist;
   }
   setempl(emp:Iemployee){
     this.emplist.push(emp);
     console.log("emplistservice");
     console.log(this.emplist);
   }
   lid:number=0;
   getnewid(){
    for (const k in this.emplist) {
    const v = this.emplist[k]
      this.lid=v.id;
      }
      return this.lid+1;
   }
   
   setemployee(emp:Iemployee)  {
  for (const k in this.emplist) {
    const v = this.emplist[k]
     if(emp.id===v.id)
        this.emplist[k]=v;
        return true;
  }
  return false;
}
checkid(eid:number)  {
  for (const k in this.emplist) {
    const v = this.emplist[k]
     if(eid===v.id){
        console.log(v.id);
        return true;
     }
  }
  return false;
}


  
}
