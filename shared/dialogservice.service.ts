import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CustomdialogComponent} from '../customdialog/customdialog.component'

@Injectable({
  providedIn: 'root'
})
export class DialogserviceService {

  constructor(private dialog:MatDialog) { }
  opencnfmdialog(msg:string){
    return this.dialog.open(CustomdialogComponent,{
      width:'300px',
      panelClass:'confirm-dialog-container',
      data:{
        message:msg
      }
    })
  }
}
