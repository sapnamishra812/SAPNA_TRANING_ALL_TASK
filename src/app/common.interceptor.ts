import { Injectable } from '@angular/core';

import {HttpRequest,

HttpHandler,

HttpEvent,

HttpInterceptor,

HttpErrorResponse

} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import {catchError} from 'rxjs/operators';

import {map} from 'rxjs'



@Injectable()

export class CommonInterceptor implements HttpInterceptor {





constructor() {}

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>

{

console.log("Passed through the interceptor in request");



return next.handle(request)

.pipe(

catchError((error: HttpErrorResponse) => {

console.log("interceptor");

console.log(error.status);

let errorMsg = '';

if (error.status === 201) {

console.log('this is201 error', error.message,error.status);

}

else{

console.log("201");

}

console.log(error.message);

return throwError(errorMsg);

})

)

}

}
