import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GetAppComponent } from "../../components/get-app/get-app.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FaqComponent, GetAppComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
