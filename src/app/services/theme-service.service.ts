import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private themeSignal = new Subject<void>();
  signal$ = this.themeSignal.asObservable();

  updateTheme(){
    this.themeSignal.next();
    console.log("Signal sent")
  }
}
