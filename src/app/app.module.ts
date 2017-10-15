// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';

// Services
import { SharedService } from './services/shared/shared.service';
import { LoginService } from './services/login/login.service';
import { EmployeeService } from './services/employee/employee.service';
import { CommonService } from './services/common/common.service';
import { ErrorComponent } from './error/error.component';
import { JobComponent } from './job/job.component';
import { DepartmentComponent } from './department/department.component';
import { EmpByJobComponent } from './emp-by-job/emp-by-job.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpByDepComponent } from './emp-by-dep/emp-by-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    ErrorComponent,
    JobComponent,
    DepartmentComponent,
    EmpByJobComponent,
    EmpListComponent,
    EmpByDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    LoginService,
    EmployeeService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
