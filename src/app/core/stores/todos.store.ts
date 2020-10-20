import { Injectable } from '@angular/core';
import { ModelCreatorService } from '../services/model-creator.service';
import { TodoModel } from '../models/todo.model';
import { action, observable } from 'mobx';

@Injectable({
  providedIn: 'root',
})
export class TodosStore {
  @observable.shallow
  private items: TodoModel[] = [];

  constructor(private modelCreator: ModelCreatorService) {}

  public getTodosByListId(listId): TodoModel[] {
    return this.items.filter((i) => i.listId === listId);
  }

  @action
  public addTodo(listId: string, title: string): void {
    const todo = this.modelCreator.create(TodoModel);
    todo.setTitle(title);
    todo.setListId(listId);
    this.items.push(todo);
  }
}
