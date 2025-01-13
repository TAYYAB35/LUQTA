import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CarouselModule,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    autoplay : true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    stagePadding: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 6
      },
    },
    nav: false
  }

  slidesStore = [
    {
      'id' : '1',
      'src' :'./../../../assets/images/comp-logo/Item.svg',
      'title' : 'sparkweb'
    },
    {
      'id' : '2',
      'src' :'./../../../assets/images/comp-logo/Item2.svg',
      'title' : 'webgear'
    },
    {
      'id' : '3',
      'src' :'./../../../assets/images/comp-logo/Item3.svg',
      'title' : 'digitech'
    },
    {
      'id' : '4',
      'src' :'./../../../assets/images/comp-logo/Item4.svg',
      'title' : 'codelink'
    },
  ]

}
