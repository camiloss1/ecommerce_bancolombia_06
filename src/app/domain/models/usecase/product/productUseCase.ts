import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductGateway } from "../../Products/gateway/productgateway";
import { ProductsResponse } from "../../Products/product";

@Injectable({
    providedIn: "root"
})
export class ProductUseCase {
    constructor(private _productGateway: ProductGateway) { }
    // metodos con la logica de negocio de mi aplicación
    getProducts() : Observable<ProductsResponse>{
        //aplico todo lo referente a la logica de mi aplicación
        return this._productGateway.getProducts();
    }

}