import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef}  from '@angular/material/dialog' ;
import {MaterialModule} from '../../material/material.module';
import {Imodaldata}  from '../imodaldata'
@Component({
  selector: 'app-modaldialog',
  templateUrl: './modaldialog.component.html',
  styleUrls: ['./modaldialog.component.css']
})
export class ModaldialogComponent implements OnInit{

    // constructor(
    // public dialogRef: MatDialogRef<ModaldialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any) { }
    modaldata!:Imodaldata;
  constructor(@Inject(MAT_DIALOG_DATA)  public data:any,public dialogref:MatDialogRef< ModaldialogComponent>) { }
  ngOnInit(): void {

   this.dialogref=this.data;
  }
   Closedialog(){
    this.dialogref.close(false)
  }

}
 