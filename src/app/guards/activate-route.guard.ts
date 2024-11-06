import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const activateRouteGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const routes = inject(Router)
  const token = sessionStorage.getItem('authToken')

  
  if (!token) {
    routes.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  } else {
    return true;
  }
};
