import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component'
import { HomeComponent } from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component'

const routes: Routes = [
  { path: 'blogs/:blogid', component: BlogDetailsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'me', component: AboutMeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
