import { Component, OnInit ,Inject} from '@angular/core';
import {Iemployee,employeemodal} from  '../empdetails/i.employee';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import {EmplistService} from '../shared/emplist.service';
import {MAT_DIALOG_DATA,MatDialogRef}  from '@angular/material/dialog' ;
import {MaterialModule} from './../material/material.module';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-reactiveemp',
  templateUrl: './reactiveemp.component.html',
  styleUrls: ['./reactiveemp.component.css']
})
export class ReactiveempComponent implements OnInit {
  title = 'newMat';
  formValue!:FormGroup;
  latestid:number=0;
  isLinear = true;
  emplist!:Iemployee[];
  width:number=0;
  
  temp1={
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
   
   colorControl = new FormControl('primary');
  EmpObj:employeemodal=new employeemodal();
  formJoin!:FormGroup;
  // isLinear = true;
  // firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder,private emplistservice:EmplistService,public dialogref:MatDialogRef<ReactiveempComponent>) { 
     this.latestid=this.emplistservice.getnewid();
  }

  ngOnInit(): void {
    //  this.firstFormGroup = this._formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required]
   this.emplistservice.getemployees().subscribe((res)=>{
     this.emplist=res;
   })
   console.log(this.emplist)
   console.log(this.latestid);
  this.formValue=this.formBuilder.group({
      id:new FormControl({value:this.latestid, disabled: true}, Validators.required),
      firstName:[''],
      lastName:['']
  })
    this.secondFormGroup=this.formBuilder.group({
     email:[''],
     contactNumber:[''],
  })
   
  }
  Submit(f:FormGroup){
    console.log(f.value);
     this.emplistservice.postemploye(f.value).subscribe();
  }
    submit(){
      this.EmpObj.firstName=this.formValue.value.firstName;
      this.EmpObj.lastName=this.formValue.value.lastName;
      this.EmpObj.email=this.secondFormGroup.value.email;
      this.EmpObj.contactNumber=this.secondFormGroup.value.contactNumber;
      console.log(this.EmpObj)
      this.emplistservice.postemploye(this.EmpObj).subscribe(); 
  }
   Closedialog(){
    this.dialogref.close(false)
  }
  
  increasetheprogressbar(temp:FormGroup){
  //   console.log(this.width);
    if(temp.valid && this.width<50 && temp.value.firstName.length!=0 && temp.value.lastName.length!=0 ){
  this.width=this.width+50;
  // emp.value.firstName.length+temp.value.lastName.length
    }
    
  }
   increasetheprogressbar1(temp:FormGroup){
    console.log(this.width);
    if((temp.valid) &&  this.width<100 && temp.value.email.length!=0 && temp.value.contactNumber.length!=0){
    this.width=this.width+50;
    }
  }
  decreaseprogressbar(){
    this.width=0;
  }
   get first(): any { return this.formValue.get('firstName'); }
}
