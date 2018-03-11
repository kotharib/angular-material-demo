import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MydialogComponent } from './mydialog/mydialog.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ControlContainer } from '@angular/forms/src/directives/control_container';


@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent,    
    SelectComponent, AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MydialogComponent,SelectComponent,AutocompleteComponent]
})
export class AppModule { }
