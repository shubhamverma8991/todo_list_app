import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-single-tdo',
  templateUrl: './single-tdo.component.html',
  styleUrls: ['./single-tdo.component.css'],
})
export class SingleTdoComponent {
  @Input() to: any;
  @Output() todoDelete: EventEmitter<any> = new EventEmitter();
  constructor() {}
  delete(to: any) {
    this.todoDelete.emit(to);
    console.log('delete press');
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
