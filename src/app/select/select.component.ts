import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectComponent>,@Inject(MAT_DIALOG_DATA) public data: any){console.log("data: ", data); }

  ngOnInit() {
  }

  onNoClick(): void {    
    this.dialogRef.close("Closing now");
  }

}
