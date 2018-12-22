import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReceiptsModule } from './receipts/receipts.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReceiptsModule, RouterModule.forRoot([])],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
