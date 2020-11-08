import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Employees } from '../model/employees';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private _url = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }
  getEmployees():Observable<Employees[]>{ 

    return this.http.get<Employees[]>(this._url);
      // .catch(this.errorHandler);

  //   return [
  //   {"id":1,"name":"Bartosz",age:24},
  //   {"id":2,"name":"Stefan",age:34},
  //   {"id":3,"name":"Mariusz",age:41},
  //   {"id":4,"name":"Andrzej",age:18},
  // ]
}

// errorHandler(error:HttpErrorResponse){
// return Observable.throw.(error.message || "Server Error")
// }

}
