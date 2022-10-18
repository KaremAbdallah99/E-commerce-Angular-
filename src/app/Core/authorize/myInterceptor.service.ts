import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqCopy = req.clone({headers: req.headers.append('Authorization', `Bearar ${localStorage.getItem('token')}`)})
    return next.handle(reqCopy);
  }

}

