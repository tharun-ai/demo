import { Component, OnInit ,ViewChild} from '@angular/core';
import {Iemployee} from './i.employee';
import {Router} from '@angular/router';
//import empdata from './empdata.json';
import {MatTableDataSource} from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator'; 
import{FormBuilder,FormGroup} from '@angular/forms'
import {NgForm} from '@angular/forms'
import {EmplistService} from '../shared/emplist.service';
import { NgxSpinnerService } from "ngx-spinner"; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatDialog, MatDialogConfig,MatDialogRef } from  '@angular/material/dialog';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import {CreateempComponent} from './createemp/createemp.component'
import {MatSnackBar} from '@angular/material/snack-bar';
import {DialogserviceService} from '../shared/dialogservice.service';
import {ModaldialogComponent} from '../shared/modaldialog/modaldialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSortModule } from '@angular/material/sort'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import {ReactiveempComponent} from '../reactiveemp/reactiveemp.component'
export const UserSchema:any = {
    "id":"number",
    "imageUrl":"text",
        "firstName":"text",
        "lastName": "text",
        "email":"text",
        "contactNumber":"text",
        "age":"number",
        "dob": "text",
        "salary":"number",
        "address":"text",
        "isEdit":"isEdit"
}
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EmpdetailsComponent implements OnInit {
   public emp!:Iemployee[];
   emp1!:Iemployee;
   loading:boolean=true;
    dataSchema=UserSchema;
    durationInSeconds = 5;
    displayedColumns = ['id','firstName', 'lastName', 'email', 'contactNumber','isEdit'];
      constructor(private router:Router,private emplist:EmplistService,  private SpinnerService: NgxSpinnerService,private spinner:MatProgressSpinnerModule
     ,private dialog:MatDialog,private dialogservice:DialogserviceService,private _snackBar: MatSnackBar) { 
      //     this.spinner;
      //  this.SpinnerService.show(); 
      
      }
       public dialogConfig=new MatDialogConfig();
       expandedElement!: Iemployee[];
 dataSource = new MatTableDataSource<Iemployee>();
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 
      ngOnInit(): void {
      this.SpinnerService.show();
    this.emplist.getemployees().subscribe(res=>
     { 
       this.dataSource.data=res as Iemployee[];
      this.SpinnerService.hide()}
    ) 
    
     // console.log(this.emp);
        //this.dataSource = new MatTableDataSource<Iemployee>(this.emp);
        //this.SpinnerService.hide(); 
    // }
    //  )
  } 
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  
  Onedit(emp:Iemployee){
     //this.emp=this.emplist.emplist;
     console.log(emp.id);
     const dialogConfig=new MatDialogConfig();
    this.dialog.open(CreateempComponent,dialogConfig)
  }
  f!:String;
    applyFilter(event:Event) {
      const  target = event.target as HTMLButtonElement
     this.f=target.value;
     var filterValue:string=String(this.f)
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 mess:string=("Data saved Successfully");
 openSnackBar() {
    
    this._snackBar.open(this.mess);
  }

  p:number=0;
//    foo(emplist:Iemployee[])  {
//   for (const k in emplist) {
//       const v=emplist[k];
//       this.p=v.id;   
//   }
//   this.router.navigate(['/create',this.p+1]);
// }
  create(emp:Iemployee[]){
     for (const k in emp) {
      const v=emp[k];
     this.p=v.id;   
  }
  console.log(this.p+1);
  this.router.navigate(['/create',this.p+1]);
  }
  k:number=0;
  deleteemployee(emp1:Iemployee){
    this.dialogConfig.autoFocus=true;
    this.dialogConfig.width="60%";
  //   this.dialog.open(CreateempComponent,this.dialogConfig);
    // this.dialogservice.opencnfmdialog('Are you sure to delete this record?').afterClosed().subscribe((res)=>{
    //   if(res){
    //     console.log(res);
    //     this.emplist.deleteemployee(emp1);
    //       this.dataSource = new MatTableDataSource<Iemployee>(this.emp);
    //   }
    //})
     return this.dialog.open(ModaldialogComponent,{
       width:'300px',
        panelClass:'confirm-dialog-container',
       data:{
         message:'Are you sure to delete the record',
         delete:true
       }
     }).afterClosed().subscribe((res)=>{
       if(res){
         console.log(res);
         this.emplist.deleteemploye(emp1).subscribe(res=>{ })
         this.dialog.open(ModaldialogComponent,{
      //  width:'200px',
       panelClass:'confirm-dialog',
       data:{
         message:'User deleted successfully',
         delete:false
       }
     })
     window.location.reload();
       
       }
     })
           
  
    

  //   if(confirm('Are you sure to delete this record?')){
  //    this.emplist.deleteemployee(emp1);
  //   }
  //   this.emplist.getemployeelist().subscribe((res)=>{
  //    this.emp=res;
  //   })

 
  // console.log(this.emp.length);
   }
   demo (){
    this.dialogConfig.autoFocus=true;
    this.dialogConfig.width="50%";
     this.dialog.open(CreateempComponent,this.dialogConfig);
   }
  
  opencnfm(){
    return this.dialog.open(ModaldialogComponent,{
      width:'300px',
    
      data:{
        CreateempComponent
      }
    })
  }
  onCreate(){
     this.demo()
     
    // this.demo.then((value:boolean) =>{
    //   if(value){alert('Entry added successfully');
    //             this.dataSource = new MatTableDataSource<Iemployee>(this.emp);
    //           }
    //   else{
    //     alert('Not addedd');
    //   }
    // } )
   // this.emp=this.emplist.getemployeelist();
    
  }
  onCreate1(){
    this.dialogConfig.autoFocus=true;
    this.dialogConfig.width="50%";
     this.dialog.open(ReactiveempComponent,this.dialogConfig);

  }
  dem(emp:Iemployee){
    console.log(emp);
    this.emplist.updateemployee(emp,emp.id).subscribe((res)=>{
     console.log(res);
    })
  }
  viewemployee(emp:Iemployee){
    this.router.navigate(['/employee',emp.id]);
  }
}
