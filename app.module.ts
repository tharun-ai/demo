import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { CreateempComponent } from './empdetails/createemp/createemp.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner"; 
import {MatSnackBar} from '@angular/material/snack-bar';

//import {MatSnackBar} from '@angular/material/snack-bar'
//import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import "@angular/compiler";
//import {RoutegaurdService} from './routegaurd.service';
import {ModaldialogComponent} from './shared/modaldialog/modaldialog.component'
//import "@angular/compile";
import {MatDialogRef, MatDialog} from  '@angular/material/dialog';
import { SnakbarComponent } from './snakbar/snakbar.component';
import { CustomdialogComponent } from './customdialog/customdialog.component';
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveempComponent } from './reactiveemp/reactiveemp.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
//import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    CreateempComponent,
    SnakbarComponent,
    CustomdialogComponent,
    ModaldialogComponent,
    ReactiveempComponent,
    ViewemployeeComponent
   // ModalComponent,
   // MatDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatPaginatorModule,
    MatChipsModule,
    ReactiveFormsModule,
    
    //ModaldialogComponent
    //MatSnackBar
  ],

   entryComponents: [
      CreateempComponent,
      CustomdialogComponent,
      ModaldialogComponent,
      ReactiveempComponent
   ],
  //providers: [RoutegaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
