import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, AuthUser } from '../../core/services/auth.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
  roles?: string[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentUser: AuthUser | null = null;

  navItems: NavItem[] = [
    { label: 'Dashboard',   route: '/dashboard',   icon: 'grid' },
    { label: 'Mis datos',   route: '/mis-datos',   icon: 'user' },
    { label: 'Mi documentación', route: '/mi-documentacion', icon: 'docs' },
    { label: 'Software',    route: '/software',   icon: 'software' },
    { label: 'Recambios',   route: '/recambios',   icon: 'cart' },
    { label: 'Incidencias', route: '/incidencias', icon: 'ticket' },
    { label: 'SCADA',       route: '/scada',       icon: 'scada', roles: ['technician', 'admin'] },
  ];

  constructor(
    private router: Router,
    private auth: AuthService,
  ) {
    this.currentUser = this.auth.getUser();
  }

  isActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  logout(): void {
    this.auth.clearSession();
    void this.router.navigateByUrl('/');
  }
}
