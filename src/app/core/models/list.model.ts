import { TodoModel } from './todo.model';
import { action, computed } from 'mobx-angular';
import { ListsStore } from '../stores/lists.store';
import { inject } from '@angular/core';
import { Guid } from '../services/guid';
import { TodosStore } from '../stores/todos.store';

export class ListModel {
  private listStore = inject(ListsStore);
  private todoStore = inject(TodosStore);

  id = Guid.uuidv4();
  title: string;

  @computed
  get isSelected(): boolean {
    return this.id === this.listStore.selectedListId;
  }

  @computed
  get todos(): TodoModel[] {
    return this.todoStore.getTodosByListId(this.id);
  }

  @computed
  get activeTodos(): TodoModel[] {
    return this.todos.filter((t) => !t.checked);
  }

  @computed
  get completedTodos(): TodoModel[] {
    return this.todos.filter((t) => t.checked);
  }

  @action
  public setTitle(title: string): this {
    this.title = title;
    return this;
  }

  public addTodo(title: string): void {
    this.todoStore.addTodo(this.id, title);
  }
}
