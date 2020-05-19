import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';

import { Users } from '../models/users';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: Users[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogsList()
      .subscribe(response => {
        console.log(response);
        this.blogs = response.body;
        console.log(this.blogs);
      });
  }

}
