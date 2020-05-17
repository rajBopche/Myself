import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs = [ 
    new Blog(1,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(2,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(3,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(4,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(5,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(6,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(7,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(8,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(9,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(10,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(11,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(12,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(13,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(14,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(15,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(16,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(17,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(18,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(19,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(120,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(111,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(154,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(179,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(21,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(22,"14th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(23,"15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(24,"15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(25,"15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android"), 
    new Blog(101,"15th Apr 2020","Coroutines are not Threads!","Yes, you heard it rite","Android")]


  constructor( ) { }

  ngOnInit() {
  }

}
