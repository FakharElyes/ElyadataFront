import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-list-blogs-author',
  templateUrl: './list-blogs-author.component.html',
  styleUrls: ['./list-blogs-author.component.scss']
})
export class ListBlogsAuthorComponent implements OnInit {

  @Input() author;

  constructor(private router: Router, private blogService:BlogService) { }

  vote = true;
  blogs;
  blogsAuthor;

  ngOnInit(): void {
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
