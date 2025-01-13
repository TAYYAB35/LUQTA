import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedLang: string = 'en';
  dropdownOpen = false;

  setLanguage(lang: string) {
    this.selectedLang = lang; // Update the selected language
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
