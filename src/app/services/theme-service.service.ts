import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  private darkTheme = true;
  private darkThemeSignal = new Subject<boolean>();
  signal$ = this.darkThemeSignal.asObservable();

  updateTheme(){
    this.darkTheme = !this.darkTheme
    this.darkThemeSignal.next(this.darkTheme);
  }
}
