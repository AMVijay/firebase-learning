import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees : any;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
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
