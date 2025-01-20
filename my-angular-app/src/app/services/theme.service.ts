import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.setTheme();
    // Update the theme every hour
    setInterval(() => this.setTheme(), 3600000);
  }

  private setTheme(): void {
    const hour = new Date().getHours();
    let themeClass = '';

    if (hour >= 6 && hour < 11) {
      themeClass = 'theme-morning';
    } else if (hour >= 17 && hour < 20) {
      themeClass = 'theme-evening';
    } else {
      themeClass = 'theme-night';
    }

    document.body.classList.remove('theme-morning', 'theme-evening', 'theme-night');
    document.body.classList.add(themeClass);
  }
}
