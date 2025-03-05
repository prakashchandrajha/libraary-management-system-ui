import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';

export const routes: Routes = [
    {
        path:'',component:WelcomeComponent,
    },

    {
        path:'home',
        component:HomePageComponent
    },

    {
        path:'home/books',
        component:BookPageComponent
    }
];
