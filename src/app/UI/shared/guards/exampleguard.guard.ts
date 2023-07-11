import { CanActivateFn } from '@angular/router';

export const exampleguardGuard: CanActivateFn = (route, state) => {
  var token = localStorage.getItem('token');
  if(token === 'a@a.comQwerty1234')
  {
      return true;  
  }
  else
  {
      
      return false;
  }
};
