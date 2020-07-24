import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


export interface Employee{
  firstname : string;
  lastname : string;
  email : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-with-firebase';

  employees : any;

  constructor(private employeeService : EmployeeService){
  }

  ngOnInit(){
    console.log("in ngOninit")
    this.employeeService.fetchEmployeeList().valueChanges().subscribe(employees => {
      employees.forEach(employee => {
        console.log("firstname :: " + employee['firstname']);
        console.log("lastname :: " + employee['lastname']);
        console.log("email :: " + employee['email']);  
      });
      this.employees = employees;
      console.log("employee size " + this.employees)
    });
  }

}
