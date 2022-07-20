import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray = [
      {
        firstName: 'JP',
        lastName: 'Parreira',
        age: 27
      },
      {
        firstName: 'JP2',
        lastName: 'Parreira',
        age: 28
      },
      {
        firstName: 'JP3',
        lastName: 'Parreira',
        age: 29
      },
      {
        firstName: 'JP4',
        lastName: 'Parreira',
        age: 30
      }
    ]

    return of(peopleArray);
  }
}
