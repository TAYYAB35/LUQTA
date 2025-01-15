import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { GetAppComponent } from '../../components/get-app/get-app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FaqComponent, GetAppComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
