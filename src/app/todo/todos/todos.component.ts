import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';
import { ListModel } from '../../core/models/list.model';
import { ListsStore } from '../../core/stores/lists.store';
import { observable } from 'mobx';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  @observable
  title = '';

  @computed
  get selectedList(): ListModel | undefined {
    console.log(this.listStore.selectedList);
    return this.listStore.selectedList;
  }

  constructor(public listStore: ListsStore) {}

  ngOnInit(): void {}

  public setTitle(title: string): void {
    this.title = title;
  }

  public addTodo(): void {
    this.selectedList?.addTodo(this.title);
    this.title = '';
  }
}
