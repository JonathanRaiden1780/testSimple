import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Users } from "../../interfaces/Users";

@Injectable({
  providedIn: "root",
})
export class PrincipalService {
  urlBase = environment.urlBase;
 
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    params: {},
  };
  constructor(private http: HttpClient) {}

  Register(req: Users): Observable<any> {
    return this.http.post(`${this.urlBase}/users/register`, req, this.httpOptions);
  }
  GetUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.urlBase}/users/getUsers`,  this.httpOptions);
  }
}
