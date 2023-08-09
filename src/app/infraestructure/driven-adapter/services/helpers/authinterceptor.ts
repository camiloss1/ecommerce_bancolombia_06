import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
      if(!token){
        //podriamos validar si se requiere un token si es asi generar uno nuevo.
        return next.handle(req);
      }
      const headers = req.clone({
        headers : req.headers.set('Authorization', `Bearer ${token}`)
      });
      console.log(headers);
      return next.handle(headers);
    }
}