import { Injectable } from '@angular/core';
import { BKT_LIST_ITEM } from '../components/bkt-list/list.model';

@Injectable({
  providedIn: 'root'
})
export class BktSharedService {
  #toDoList: BKT_LIST_ITEM[] = [];
  constructor() { }
  addToDo(toDo: BKT_LIST_ITEM) {
    this.#toDoList.push(toDo)
  }
  getToDos() {
    return this.#toDoList;
  }
  removeToDo(position: number) {
    return this.#toDoList = this.#toDoList.filter((t: BKT_LIST_ITEM, index: number) => index != position);
  }
}
