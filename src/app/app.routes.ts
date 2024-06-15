import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { TeachingsComponent } from './components/teachings/teachings.component';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component:  HomeComponent },
    { path:'blogs', component: BlogsComponent },
    { path:'teachings', component: TeachingsComponent },
    { path:'cv', component: CvComponent },
];
