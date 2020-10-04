import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Boat } from './boat.model';
import { BoatService } from './boat.service';

@Injectable({
  providedIn: 'root'
})
export class BoatResolver implements Resolve<Boat> {

  constructor(private boatService: BoatService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Boat> | Promise<Boat> | Boat {
    return this.boatService.getBoat(route.params.name);
  }
}
