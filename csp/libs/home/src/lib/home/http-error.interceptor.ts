import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let errorMessage: string;

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          // Client-side error.
          errorMessage = `An error occurred: ${err.error.message}`;
          Swal.fire('Network error', 'Please try again later.', 'error');
        } else {
          // Server-side error.
          Swal.fire('Server unavailable', 'Please try again later.', 'error');
          // CORS issue, uncomment and compare it with "Network" tab in the browser. Console.log returns "0", whereas browser correctly returns (for example) 404 when hitting https://demo-api.now.sh/fake as well as all others URLs related to the domain have issues with CORS, i.e. missing Access-Control-Allow-Origin header in the back-end server, see #20991 (https://github.com/angular/angular/issues/20991). I do expect some kind of this problem on the back-end side like the Stack Overflow response (https://stackoverflow.com/questions/54986127/detect-http-404-responses-from-server-in-httpclient#comment96739520_54986211) suggests. It was tested in Incognito mode, i.e. without any blockers from possible extensions such as AdBlock(s).
          //console.error(`Backend code ${err.status}`);
          //console.log(err);
          errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }

        return throwError(errorMessage);
      })
    );
  }
}
