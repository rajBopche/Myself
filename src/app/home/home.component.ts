import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

enum MenuOption {
  Blogs,
  Github,
  Stack_Overflow,
  Tweets,
  Me
}

const GITHUB_PROFILE_LINK = "https://github.com/rajBopche"
const STACK_OVERFLOW_PROFILE_LINK = "https://stackoverflow.com/users/9987309/icantc?tab=profile"
const TWITTER_PROFILE_LINK = "https://twitter.com/raj_bopche"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }
  title = 'my-portfolio-app';
  sections = ["Blogs", "Github", "Stack Overflow", "Tweets", "Me"];

  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {

  }

  onMenuClicked(menuOption: Number) {
    switch (menuOption) {
      case MenuOption.Blogs: {
        this.moveToOtherComponent('/blogs')
        break;
      }

      case MenuOption.Github: {
        this.moveToExternalLink(this.document, GITHUB_PROFILE_LINK);
        break;
      }

      case MenuOption.Stack_Overflow: {
        this.moveToExternalLink(this.document, STACK_OVERFLOW_PROFILE_LINK);
        break;
      }

      case MenuOption.Tweets: {
        this.moveToExternalLink(this.document, TWITTER_PROFILE_LINK);
        break;
      }

      case MenuOption.Me: {
        this.moveToOtherComponent('/me')
      }
    }
  }

  moveToExternalLink(document: Document, link: string) {
    this.document.location.href = link
  }

  moveToOtherComponent(component: string) {
    this.router.navigate([component]);
  }

}
