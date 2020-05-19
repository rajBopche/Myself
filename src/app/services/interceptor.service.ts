import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  count = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    ++this.count;
    return next
      .handle(req)
      .pipe(
        tap(
          event => console.log(event),
          error => console.log(error)
        ),
        finalize(() => {
          --this.count;
          if (this.count == 0) this.spinnerService.hide();
        })
      )
  }
}
