import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rentconfirmation',
  templateUrl: './rentconfirmation.component.html',
  styleUrls: ['./rentconfirmation.component.css']
})
export class RentconfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<RentconfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  openModal() {
    document.getElementById("myModal")!.style.display = "block";
  }

  closeModal() {
    document.getElementById("myModal")!.style.display = "none";
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
