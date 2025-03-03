import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
