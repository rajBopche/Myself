import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Users } from '../models/users';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: Users[];

  constructor(private blogsService: BlogsService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show()
    this.blogsService.getBlogsList()
      .subscribe(response => {
        this.spinnerService.hide()
        console.log(response);
        this.blogs = response.body;
        console.log(this.blogs);
      });
  }

}
