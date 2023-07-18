import { CanActivateFn } from '@angular/router';

export const exampleguardGuard: CanActivateFn = (route, state) => {
  var token = localStorage.getItem('token');
  // llamemos un servicio que nos indique si el token que tenemos es valido, o ejecutar una clase que nos valide lo mismo

  //LLamado a UserUseCase Token
  if(token)
  {
      return true;  
  }
  else
  {
      
      return false;
  }
};
