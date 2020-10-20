import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { ListsComponent } from './lists/lists.component';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [TodosComponent, ListsComponent],
  exports: [TodosComponent, ListsComponent],
  imports: [CommonModule, MobxAngularModule],
})
export class TodoModule {}
