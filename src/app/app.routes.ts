import {Routes} from '@angular/router';
import {VacationDetailComponent} from "./vacation-detail/vacation-detail.component";
import {AboutThisWebsiteComponent} from "./about-this-website/about-this-website.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutThisWebsiteComponent,
    title: 'About'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery'
  },
  {
    path: 'detail/:id',
    component: VacationDetailComponent,
    title: 'Vacation'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found'
  },
];
