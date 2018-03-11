import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule }from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {HeaderComponent} from './navigation/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
