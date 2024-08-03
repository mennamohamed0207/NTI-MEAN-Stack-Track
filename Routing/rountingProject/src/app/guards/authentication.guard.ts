import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const _router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    _router.navigate(['/login']);
    return false;
  }
};
