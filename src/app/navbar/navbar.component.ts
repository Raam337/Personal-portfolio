import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pages: String[] = ["Home", "Projects", "Resume"];
  showDropdown = false
  darkTheme:boolean = true;
  constructor(private router: Router, private themeService:ThemeService) {
    themeService.signal$.subscribe(signal=>{
      this.darkTheme = signal
    })
  }

}
