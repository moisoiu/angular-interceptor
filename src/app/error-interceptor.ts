import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }
    //function which will be called for all http calls
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        
        console.log(request.headers.getAll("X-Correlation-ID"));
        //logging the updated Parameters to browser's console
        
        return next.handle(request).pipe(
            tap(
                event => {
                    //logging the http response to browser's console in case of a success
                    if (event instanceof HttpResponse) {
                        console.log("api call success :", event);
                    }
                    console.log("default :", event);
                },
                error => {
                    //logging the http response to browser's console in case of a failuer
                    if (event instanceof HttpResponse) {
                        console.log("api call error :", event);
                    }
                    console.log("default error:", error);
                }
            )
        );
    }
}