import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pages: String[] = ["Home", "Projects", "Resume", "About"];
  showDropdown = false
  constructor(private router: Router) {}

}
