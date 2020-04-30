import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { SourcehtmlComponent } from './sourcehtml/sourcehtml.component';
import { SourceApiComponent } from './source-api/source-api.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { RegisterComponent } from './register/register.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

// welcome
const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  { path:'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path:'todo/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  { path:'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  { path:'sourcehtml', component: SourcehtmlComponent, canActivate: [RouteGuardService]},
  { path:'source_api', component: SourceApiComponent, canActivate: [RouteGuardService]},
  { path:'show-table', component: ShowTableComponent, canActivate: [RouteGuardService]},
  { path:'register', component: RegisterComponent},
  { path:'request', component: AcceptRequestComponent, canActivate: [RouteGuardService]},
  { path:'file', component: FileUploadComponent, canActivate: [RouteGuardService]},

  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
