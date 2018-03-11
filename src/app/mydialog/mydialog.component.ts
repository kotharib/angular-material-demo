import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectComponent } from '../select/select.component';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-mydialog',
  templateUrl: 'mydialog.component.html',
  styleUrls: ['mydialog.component.css'],
})
export class MydialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(SelectComponent,{
      width: '250px',
      data: { name: "Brijesh"}
    })
    .afterClosed().subscribe(result=>console.log(result));
  }

}
