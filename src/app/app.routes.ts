import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { DataNotFondComponent } from './pages/data-not-fond/data-not-fond.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'page-not-found', component: ErrorComponent },
    { path: 'data-no-found', component: DataNotFondComponent },
    { path: 'comming-soon', component: CommingSoonComponent },
    { path: 'data-no-found', component: DataNotFondComponent },
    { path: '**', component: ErrorComponent }
];
