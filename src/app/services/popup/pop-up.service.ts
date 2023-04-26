import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, take } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { ConfirmationBoxComponent } from 'src/app/shared/confirmation-box/confirmation-box.component';


@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  private confirmationPopUpResp = new Subject<boolean>();
  changeConfirmationValue(confimation:boolean){
    this.confirmationPopUpResp.next(confimation); 
  }
  private alertPopUpResp = new Subject<boolean>();
  changeAlertValue(confimation:boolean){
    this.alertPopUpResp.next(confimation); 
  }

  constructor(private matDailogue: MatDialog) { }

  confimation(msg:string,firstBtnName:string,secondBtnName:string) {
    const dialogRef = this.matDailogue.open(ConfirmationBoxComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: firstBtnName,
          cancel: secondBtnName,
        },
      },
    });
    return this.confirmationPopUpResp.asObservable().pipe(take(1));
  }
  alert(msg:string,okBtnName?:string) {
    const dialogRef = this.matDailogue.open(AlertComponent, {
      data: {
        message: msg,
        buttonText: {
          ok: okBtnName,
        },
      },
    });
    return this.alertPopUpResp.asObservable().pipe(take(1));
  }
}
