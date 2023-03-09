import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todo: any;
  constructor() {
    this.todo = [
      {
        sno: 1,
        title: 'This is title',
        desc: 'i am desc',
        active: true,
      },
      {
        sno: 2,
        title: 'This is title2',
        desc: 'i am desc2',
        active: true,
      },
      {
        sno: 3,
        title: 'This is title3',
        desc: 'i am desc3',
        active: true,
      },
    ];
  }
  parentDeleltefunc(to: any) {
    console.log(to);
    const index = this.todo.indexOf(to);
    this.todo.splice(index, 1);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
