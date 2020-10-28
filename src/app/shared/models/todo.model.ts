import { action, computed, observable } from 'mobx';
import { Guid } from '../services/guid';
import { inject } from '@angular/core';
import { ListsStore } from '../stores/lists.store';
import { ListModel } from './list.model';

export class TodoModel {
  private listsStore = inject(ListsStore);

  @observable id = Guid.uuidv4();
  @observable title: string;
  @observable checked = false;
  @observable listId: string;

  @computed
  public get list(): ListModel {
    return this.listsStore.items.find((i) => i.id === this.listId);
  }

  @action
  public setTitle(title: string): void {
    this.title = title;
  }

  @action
  public setListId(listId: string): void {
    this.listId = listId;
  }

  @action
  public setChecked(value: boolean): void {
    this.checked = value;
  }

  @action
  public toggle(): void {
    this.checked = !this.checked;
  }
}
