import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './service/api-service.service';
import {TableModule} from 'primeng/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ShowformComponent } from './showform/showform.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { CommonInterceptor } from './common.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    UserEditComponent,
    ShowformComponent,
    ChildPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule

  ],
  providers: [ApiServiceService,
    {provide:HTTP_INTERCEPTORS, useClass:CommonInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
