import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { ScraperInfo } from '../sourcehtml/sourcehtml.component';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { BasicAuthenticationService } from '../service/basic-authentication-service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  scraperInfos: ScraperInfo[]

  message: string
  username: string;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private sourceService: SourcehtmlService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.refreshTodo();
  }

  // refreshTodos() {
  //   this.todoService.retrieveAllTodos(this.username).subscribe(
  //     response => {
  //       console.log(response);
  //       this.todos = response;
  //     }
  //   );
  // }
  refreshTodo() {
  this.sourceService.retrieveAllScraperInfo(this.username).subscribe(
    response => {
      console.log(response);
      this.scraperInfos = response;
    }
  );
}

  deleteInfo(id) {
    this.sourceService.deleteInfo(id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Collector ${id} Successful`
        this.refreshTodo();
      }
    )
  }
  // deleteTodo(id) {
  //   this.todoService.deleteTodo(this.username, id).subscribe(
  //     response => {
  //       console.log(response);
  //       this.message = `Delete of Todo ${id} Successful`
  //       this.refreshTodos();
  //     }
  //   )
  // }

  updateInfo(id) {
    this.router.navigate(['todo', id])
  }

  addTodo() {
    this.router.navigate(['todo', -1])
  }

}
