import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Customer } from '../models/customer.model';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  user = new Customer();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if (this.user && this.user.password && this.user.username) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' + window.btoa(this.user.username + ':' + this.user.password)
      );
    }

    let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }
    console.log("xsrf->"+sessionStorage.getItem('XSRF-TOKEN'))
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders,
    });
    return next.handle(xhr).pipe(
      catchError(err => {
        if (err.status === 401) {
            Swal.fire({
              icon: 'warning',
              title: 'Invalid Login!',
              allowOutsideClick: () => {
                const popup = Swal.getPopup()
                popup.classList.remove('swal2-show')
                setTimeout(() => {
                  popup.classList.add('animate__animated', 'animate__headShake')
                })
                setTimeout(() => {
                  popup.classList.remove('animate__animated', 'animate__headShake')
                }, 500)
                return false
              }
            })
            this.router.navigate(['home'])
        }
        const error = err.statusText;
        return throwError(error);
}));
    //   tap((err: any) => {
    //     console.log(err)
    //     console.log("enters pipe")
    //     console.log(HttpErrorResponse);
    //     if (err instanceof HttpErrorResponse) {
    //       console.log("httperrorresponse")
    //       if (err.status !== 401) {
    //         console.log("enters 401")
    //         Swal.fire({
    //           icon: 'question',
    //           title: 'Error 401 encountered! Access denied',
    //           allowOutsideClick: () => {
    //             const popup = Swal.getPopup()
    //             popup.classList.remove('swal2-show')
    //             setTimeout(() => {
    //               popup.classList.add('animate__animated', 'animate__headShake')
    //             })
    //             setTimeout(() => {
    //               popup.classList.remove('animate__animated', 'animate__headShake')
    //             }, 500)
    //             return false
    //           }
    //         })
    //         this.router.navigate(["/404"])
    //         return;
    //       }
    //       this.router.navigate(['dashboard']);
    //     }
    //     else {
    //       console.log('koi error werror nahi hain')
    //     }
    //   })
    // );
  }
}
