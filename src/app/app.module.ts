import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { SourcehtmlComponent } from './sourcehtml/sourcehtml.component';
import { SourceApiComponent } from './source-api/source-api.component';
import { KeysPipe } from './pipes/keys.pipe';
import { ShowTableComponent } from './show-table/show-table.component';
import { SafePipe } from './pipes/safe.pipe';
import { RegisterComponent } from './register/register.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    SourcehtmlComponent,
    SourceApiComponent,
    KeysPipe,
    ShowTableComponent,
    SafePipe,
    RegisterComponent,
    AcceptRequestComponent,
    FileUploadComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
