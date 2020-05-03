import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)

      .pipe(
        retry(1),

        catchError((error: HttpErrorResponse) => {
          let throwMessage: string = '';

          if (error.error instanceof ProgressEvent) {
            throwMessage = error.message;
          } else {
            throwMessage = error.error.message[0].messages[0].message;
          }
          return throwError(throwMessage);
        })
      );
  }
}
