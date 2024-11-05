import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pages: String[] = ["Home", "Projects", "Resume", "About", "Blog"];

  constructor(private router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/Home';
  }

}
