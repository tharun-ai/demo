import { Component, OnInit ,Input} from '@angular/core';
import {Iemployee} from '../i.employee'
import empdata from '../empdata.json';
import{ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import{FormBuilder,FormGroup,NgForm} from '@angular/forms';
import {EmpdetailsComponent} from '../empdetails.component';
import {EmplistService} from '../../shared/emplist.service';
//import { MatDialogRef } from  '@angular/material/dialog';
import{ModaldialogComponent} from '../../shared/modaldialog/modaldialog.component'
import { MatDialog, MatDialogConfig,MatDialogRef } from  '@angular/material/dialog';
@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {
  emplist1!:Iemployee[];
  emp!:Iemployee;
  eid!:number;
  latestid!:number;
  constructor(private route:ActivatedRoute,private emplistservice:EmplistService,public dialogref:MatDialogRef<CreateempComponent>
  ,private dialog:MatDialog) { };
k!:boolean;
  ngOnInit(): void {
    console.log("Createcomponent");
      this.emplistservice.getemployees().subscribe(res=>
     {this.emplist1=res as Iemployee[];}
    ) 
     //this.k= this.emplistservice.checkid(this.eid);
     //if(this.k===false){
       this.latestid=this.emplistservice.getnewid();
         this.resetform();
    // }
  }

   onSubmit(f:NgForm){
      console.log(f.value);
      if(f.valid){
      this.emplistservice.postemploye(f.value).subscribe(res=>{this.emplist1=res as Iemployee[];
         this.onClose()
       return this.dialog.open(ModaldialogComponent,{
       width:'300px',
        panelClass:'confirm-dialog-create',
       data:{
         message:'User added successfully',
         delete:false
       }
     })
      //  console.log(this.emplist
      });
      }
      this.onClose()
       window.location.reload();
    //    return this.dialog.open(ModaldialogComponent,{
    //    width:'300px',
    //     panelClass:'confirm-dialog-create',
    //    data:{
    //      message:'User added successfully',
    //      delete:false
    //    }
    //  })
     // console.log(this.emplistservice.emplist);
       
  }
 resetform(form?:NgForm){
  if(form){
    form.reset();
  }
   this.emp={
     id:this.latestid,
    imageUrl:"",
        firstName:"",
        lastName: "",
        email:"",
        contactNumber:"",
        age:0,
        dob: "",
        salary:0,
        address:""
   }
 }
  
// check!:boolean
//  setemployee(emp:Iemployee)  {
//      this.check=this.emplistservice.setemployee(emp);
//      if(this.check){
//        alert("Edited successfully");
//      }
//      else{
//        alert("Not edited");
//      }
// }
onClose(){
  this.resetform();
  this.dialogref.close();
}

}
 // this.emplist=this.emplistservice.emplist
   // this. eid=+this.route.snapshot.params['id'];
   // console.log(this.emplist);