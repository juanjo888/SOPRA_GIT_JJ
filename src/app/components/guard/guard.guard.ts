import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard {
  keysiono = false;
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // if (this.hasUser()) {
    // return true;
    // }
    if (!this.keysiono) {
      Swal.fire({
        title: 'YOU DONT HAVE PERMISSSIONS!',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        backdrop: 'rgba(0,150,240,0.4)',
      });
      return false
    } else {
      return true;
    }
  }
}

  // hasUser(): boolean {
  // if () {
  // return false;
  // }
  // else{
  // //   ( help )
  // return true;
  //   }
