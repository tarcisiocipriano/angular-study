import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    protected authService: AuthService
  ) { }

  onLoadServer(id: number) {
    // absolute router whith query params
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  toggleAuthMode() {
    this.authService.loggedIn ? this.authService.logout() : this.authService.login();
  }

}
