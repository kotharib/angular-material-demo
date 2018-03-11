import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialog, MatNativeDateModule, MatInputModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [ 
    MatButtonModule ,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule ,
    MatAutocompleteModule       
  ]
})
export class MaterialModule { }
