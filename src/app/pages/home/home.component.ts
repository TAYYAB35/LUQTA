import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FormsModule,CarouselModule,CommonModule,NzToolTipModule,NzDatePickerModule,NzSelectModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  date = null;
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

  reviewOptions: OwlOptions = {
    loop: true,
    autoplay : true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    navSpeed: 500,
    stagePadding: 100,
    margin: 24,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3.5
      },
    },
    nav: false
  }

  ribbenOptions: OwlOptions = {
    loop: true,
    autoplay : true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    navSpeed: 500,
    stagePadding: 100,
    margin: 24,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      1000: {
        items: 4.5
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

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  ribbonItems = [
    { src : 'assets/images/lo.svg', text: 'Lorem ipsum dolor sit amet' },
    { src : 'assets/images/lo.svg', text: 'Lorem ipsum dolor sit amet' },
    { src : 'assets/images/lo.svg', text: 'Lorem ipsum dolor sit amet' },
    { src : 'assets/images/lo.svg', text: 'Lorem ipsum dolor sit amet' },
  ];
  

}
