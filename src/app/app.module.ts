import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoModule, MobxAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
