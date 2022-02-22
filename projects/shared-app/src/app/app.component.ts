import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BKT_BUTTON_PROPS } from '../../../bkt-shared/src/lib/components/bkt-button/button.model';
import { BKT_HEADER_PROPS } from '../../../bkt-shared/src/lib/components/bkt-header/header.model';
import { BKT_LIST_PROPS } from '../../../bkt-shared/src/lib/components/bkt-list/list.model';
import { BktSharedService } from '../../../bkt-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoList = this.bktSharedService.getToDos();
  title = 'sharedAPP';
  headerProps: BKT_HEADER_PROPS = {
    navList: [
      { text: 'Shell', path: '/' },
      { text: 'App1', path: '/app1' },
    ]
  }

  listProps: BKT_LIST_PROPS = [
  ]

  buttonProps: BKT_BUTTON_PROPS = {
    text: 'Add to do',
    type: 'primary'
  }
  constructor(private router: Router, private bktSharedService: BktSharedService) { }

  onItemListClick(event: Event): void {
    const item = (event as CustomEvent).detail;
    const position: number = this.listProps.indexOf(item);
    this.listProps = [...this.bktSharedService.removeToDo(position)]
  }
  onItemHeaderClick(event: Event): void {
    const nav = (event as CustomEvent).detail;
    this.router.navigate([nav.path])
  }
  onItemButtonClick(): void {
    const toDos = [
      'Do microfrontends from SegurosModule',
      'Do Bkt-cli from SegurosModule',
      'Do Bkt-shared from SegurosModule',
      "Work from SegurosModule",
      "Do components from SegurosModule",
      "Do services from SegurosModule"
    ];
    const todo = { text: toDos[Math.floor(Math.random() * toDos.length)] }
    this.bktSharedService.addToDo(todo);
    this.listProps = [...this.bktSharedService.getToDos()] as BKT_LIST_PROPS;
  }
}
