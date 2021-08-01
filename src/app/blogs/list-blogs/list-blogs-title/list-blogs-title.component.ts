import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-list-blogs-title',
  templateUrl: './list-blogs-title.component.html',
  styleUrls: ['./list-blogs-title.component.scss']
})
export class ListBlogsTitleComponent implements OnInit {

  @Input() blogstitle;
  vote
  empty = false;
  constructor(private router: Router, private blogService:BlogService) { }

  ngOnInit(): void {
    console.log(this.blogstitle)
    if (this.blogstitle.length == 0){
      this.empty = true;
    }
    console.log("this.empty",this.empty);
  }

  getBorder(up,down){
    if (up < down){
      this.vote = false;
      console.log(this.vote);
    }else{
      this.vote = true;
      console.log(this.vote)
    }
  }


  onCardClick(id){
    localStorage.setItem('id', id);
    this.router.navigateByUrl('/details');
  }

}
