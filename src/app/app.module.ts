import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BusinessListComponent } from './business-list/business-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
