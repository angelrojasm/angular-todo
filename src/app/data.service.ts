import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private taskArr: string[] = ['task1','task2']

  constructor() { }

  addItem(text:string) {
    this.taskArr.unshift(text)
  }
  deleteItem(text: string) {
    this.taskArr = this.taskArr.filter(element => element != text)
  }
  
  getTaskArr() {
    return this.taskArr
  }
}
