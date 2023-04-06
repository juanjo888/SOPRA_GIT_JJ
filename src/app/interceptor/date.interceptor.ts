import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable()
export class DateInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest = request.clone({
      body: this.changeDate(request.body),
    });
    // console.log(request);
    return next.handle(newRequest);
  }
  changeDate(modifyDate: Producto[]): Producto[] | undefined{
if(!modifyDate) return;
modifyDate.forEach((element) =>
element.reviews?.forEach((element) => {
element.date = new Date(element.date)
})
);
return modifyDate;
  }
}

    //   productsDate.forEach((element) => {
  //     element.forEach((element2) => {
  //       element2.reviews?.forEach((element3) => {
  //         element3.date = new Date(element3.date);
  //       });
  //     });
  //   });

  // }


// console.log(this.productsDate);
