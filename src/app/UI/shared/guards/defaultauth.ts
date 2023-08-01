import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Defaultauth implements CanActivate {
    constructor(private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var token = localStorage.getItem('token');
        if(token)
        {
            return true;  
        }
        else
        {
            this.router.navigate(['/fullscreen/login']);
            return false;
        }

    }
}
