import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListsStore } from '../../shared/stores/lists.store';
import { ListModel } from '../../shared/models/list.model';
import { computed, observable } from 'mobx';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent {
  @observable
  newListTitle = '';

  @computed
  get lists(): ListModel[] {
    return this.listsStore.items;
  }

  constructor(private listsStore: ListsStore) {}

  public selectList(listId: string): void {
    this.listsStore.selectList(listId);
  }

  public addList(): void {
    this.listsStore.addList(this.newListTitle);
    this.setTitle('');
  }

  public setTitle(title: string): void {
    this.newListTitle = title;
  }
}
