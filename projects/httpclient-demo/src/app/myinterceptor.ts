import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request in Interceptor' + req);
    if (req.body) {
      const duplicate = req.clone({ body: req.body.replace(/pizza/gi, '🍕') });
      return next.handle(duplicate);
    }
    return next.handle(req);
  }

}
