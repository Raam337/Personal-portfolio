import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  darkTheme: boolean = true;


  ngOnInit(): void {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(darkThemeMq)
    //this.darkTheme = darkThemeMq.matches ? true : false;
    this.darkTheme? document.documentElement.classList.add("darkTheme"): null;
  }

  onToggle(){
    document.documentElement.classList.toggle("darkTheme");
  }


}
