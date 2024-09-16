import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeachingsComponent } from './components/teachings/teachings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'teachings', component: TeachingsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class CustomRouterModule {}
