import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { Employee } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dbPath = "/employee";

  employeeRef: AngularFirestoreCollection<Employee> = null;

  constructor(private db: AngularFirestore) { 
    this.employeeRef = db.collection(this.dbPath);
    console.log("firestore :: " + db.collection.length);
  }

  fetchEmployeeList(){
    return this.employeeRef;
  }

}
