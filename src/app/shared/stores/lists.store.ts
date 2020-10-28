import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx';
import { ListModel } from '../models/list.model';
import { ModelCreatorService } from '../services/model-creator.service';

@Injectable({
  providedIn: 'root',
})
export class ListsStore {
  @observable.shallow
  items: ListModel[] = [];
  @observable
  selectedListId: string | undefined;

  @computed
  get selectedList(): ListModel | undefined {
    return this.items.find((i) => i.id === this.selectedListId);
  }

  constructor(private modelCreator: ModelCreatorService) {}

  @action
  public addList(title: string): void {
    const list = this.modelCreator.create(ListModel).setTitle(title);
    this.items.push(list);
  }

  @action
  public selectList(id: string): void {
    this.selectedListId = id;
  }
}
