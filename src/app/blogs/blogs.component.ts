import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = [ 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite"), 
    new Blog("15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite")]


  constructor() { }

  ngOnInit() {
  }

}
