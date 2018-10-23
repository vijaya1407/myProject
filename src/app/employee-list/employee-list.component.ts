import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees = [];
  constructor(private http : HttpClient) { }

  ngOnInit() {
   this.http.get('https://reqres.in/api/users?page=2')
   .subscribe(
      (data)=> {
        console.log('The response is '+data);
      },
      (err)=> {
        console.log('The error is '+err);
      }
    );
  }

}
