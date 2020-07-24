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

  constructor(){
  }

  ngOnInit(){    
  }

}
