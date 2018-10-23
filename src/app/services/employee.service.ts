import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmployee } from "../employee";
import { Observable } from "rxjs";



@Injectable()
export class EmployeeService {
    private _url : string = "/assets/data/employees.json";
    constructor(private httpClient : HttpClient) {}

    // getEmployees(): Observable<IEmployee[]> {
    //     return this.httpClient.get<IEmployee[]>(this._url);
    // }

    getEmployees() {
        return this.httpClient.get("https://reqres.in/api/users?page=2");
    }
}