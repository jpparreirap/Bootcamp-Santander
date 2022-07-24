import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL:string = 'https://sheet.best/api/sheets/b8b51046-f196-40dd-bf95-9be50438d3c0';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //CRUD - CREATE, READ, UPDATE, DELETE
  
  //Retorna a lista de usuários READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }

  //Salva usuário no banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }

  //Exclui o usuário do banco DELETE
  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  //Edita usuário UPDATE
  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  //Lista usuário unico
  getUser(id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`);
  }
}
