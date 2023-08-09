import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { UserService } from './infraestructure/driven-adapter/services/user/user.service';
import { ProductGateway } from './domain/models/Products/gateway/productgateway';
import { ProductsService } from './infraestructure/driven-adapter/services/products/products.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './infraestructure/driven-adapter/services/helpers/authinterceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule
  ],
  providers: [
    { provide: Usergateway, useClass: UserService },
    { provide: ProductGateway, useClass: ProductsService },
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
