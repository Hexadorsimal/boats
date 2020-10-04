import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boat } from './boat.model';

const BOATS = [
  {name: 'Northwestern'},
];


@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor() { }

  getBoats(): Observable<Boat[]> {
    return of(BOATS);
  }

  getBoat(name: string): Observable<Boat> {
    return of(BOATS[0]);
  }

}
