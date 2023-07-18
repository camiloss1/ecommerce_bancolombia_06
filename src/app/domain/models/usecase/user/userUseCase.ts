import { Injectable } from "@angular/core";
import { Usergateway } from "../../User/gateway/usergateway";
import { Observable } from "rxjs";
import { User } from "../../User/user";

@Injectable({
    providedIn: "root"
})
export class UserUseCase {
    constructor(private _userGateway: Usergateway) { }
    // metodos con la logica de negocio de mi aplicación
    login(email: string, password: string) : Observable<User>{
        //aplico todo lo referente a la logica de mi aplicación
        return this._userGateway.login(email, password);
    }
    validateToken(token:string){
    // la validación del token sea local o sea llamado a servicio (gateway)
    }
}