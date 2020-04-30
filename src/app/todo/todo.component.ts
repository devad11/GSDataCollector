import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ScraperInfo } from '../sourcehtml/sourcehtml.component';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { BasicAuthenticationService } from '../service/basic-authentication-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  scraperInfo: ScraperInfo
  username: string;

  constructor(
    private sourceHtmlService: SourcehtmlService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    this.todo = new Todo(this.id, "", false, new Date)
    this.scraperInfo = new ScraperInfo('name2', 2, 1, 'Adam', 'source', 'selectors', 'columns', null, true, false);
    this.sourceHtmlService.retrieveInfo(this.id).subscribe(
      data => this.scraperInfo = data
    )
    console.log(this.scraperInfo)

  }

  saveTodo() {
    this.sourceHtmlService.updateInfo(this.id, this.scraperInfo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
  }
}
