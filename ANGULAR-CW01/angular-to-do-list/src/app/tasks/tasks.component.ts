import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // Nazwa zmiennej nie moze byc taka sama jak nazwa komponentu!
  private tasksArr: Array<String>;
  private deletedArr: Array<String>;
  private input: String;
  private valid: Boolean;
  private showDeleted: Boolean;

  constructor() {
    this.tasksArr = ['Posprzątać', 'Pouczyć się', 'Zrobić zadanie domowe'];
    this.deletedArr = [];
    this.input = '';
    this.valid = false;
    this.showDeleted = false;
  }

  addATask(){
    if(this.valid) {
      if(this.tasksArr.indexOf(this.input) > -1){
        alert('You cannot add a task which already exists!');
        return null;
      }
      console.log(this.tasksArr.indexOf(this.input));
      this.tasksArr.push(this.input);
      this.input = '';
      this.valid = false;
    }
    else{
      alert('You cannot add an empty task!');
    }
  }

  deleteATask(index){
    const deletedItem = this.tasksArr[index];
    this.tasksArr.splice(index, 1);
    this.deletedArr.push(deletedItem);
  }

  deletePerm(index){
    this.deletedArr.splice(index, 1);
  }

  validate(){
    if((<HTMLTextAreaElement>event.target).value.trim().replace(/\s\s+/g, ' ').length !== 0){
      this.valid = true;
      console.log(this.valid);
    }
    else{
      this.valid = false;
      console.log(this.valid);
    }
  }

  showDeletedTasks(){
    this.showDeleted = true;
  }
  showCurrentTasks(){
    this.showDeleted = false;
  }

  ngOnInit() {
  }

}
