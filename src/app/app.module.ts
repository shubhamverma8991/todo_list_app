import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyComponents/todo/todo.component';
import { SingleTdoComponent } from './MyComponents/single-tdo/single-tdo.component';
import { AddtodoComponent } from './MyComponents/addtodo/addtodo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, SingleTdoComponent, AddtodoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
