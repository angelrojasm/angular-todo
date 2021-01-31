import { Component, Input, Output, EventEmitter } from '@angular/core';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  isChecked: boolean = false;
  faCheck: any = faCheck;
  faTrash: any = faTrash;
  @Input() Task: string = '';
  @Output() itemDeletedEvent = new EventEmitter<string>();


  checkItem() {
    this.isChecked = !this.isChecked
  }
  
  deleteItem(text: string) {
    this.itemDeletedEvent.emit(text)
  }

}
