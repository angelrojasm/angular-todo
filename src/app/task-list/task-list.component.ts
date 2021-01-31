import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  private intervalSubscription: any;

  @Input() taskArr: string[] = [];
  @Output() itemDeletedEvent = new EventEmitter<string>();

  deleteItem(text: string) {
    this.itemDeletedEvent.emit(text)
  }
  

}
