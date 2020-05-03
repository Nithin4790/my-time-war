import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
