import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopUpService } from 'src/app/services/popup/pop-up.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {


  message: string = "Are you sure?"
  cancelButtonText = "Ok"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertComponent>,private popup: PopUpService) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
      }
  }
  onConfirmClick(): void {
    this.popup.changeAlertValue(true); 
    this.dialogRef.close(true);
  }

}
