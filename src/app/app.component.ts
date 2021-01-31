import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  task: string = '';
  taskArr: string[] = []

  addTodo(text:string) {
    this.taskArr.unshift(text)
    this.task = ''
  }

  deleteItem(text: string) {
    this.taskArr = this.taskArr.filter(element => element != text)
  }
  
}
  