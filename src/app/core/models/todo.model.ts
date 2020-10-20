import { action, observable } from 'mobx';
import { Guid } from '../services/guid';

export class TodoModel {
  @observable id = Guid.uuidv4();
  @observable title: string;
  @observable checked = false;
  @observable listId: string;

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
