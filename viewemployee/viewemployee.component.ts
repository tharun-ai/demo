import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {EmplistService} from  '../shared/emplist.service'
import {Iemployee,employeemodal} from '../empdetails/i.employee'
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private router:ActivatedRoute,private service:EmplistService) { }
 eid:number=0;
 cur_emp:employeemodal=new employeemodal();
 emplist!:Iemployee[];
  ngOnInit(): void {
   

    this. eid=this.router.snapshot.params['id'];
   this.service.getemployees().subscribe((res)=>{
     this.emplist=res as Iemployee[];
    //  console.log(this.emplist)
    this.geteachemployee();
   })
   
  }
  geteachemployee(){
    for (const k in this.emplist) {
    const v = this.emplist[k]
      if( this.eid==v.id){
      this.cur_emp=v;
      }
      }
      console.log(this.cur_emp);
  }

}
