import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.scss']
})
export class DetailBlogComponent implements OnInit {

  constructor(private blogService:BlogService) { }
  blogId = localStorage.getItem('id');
  blog
  vote

  ngOnInit(): void {
    this.getOneBlog();
  }
  
  getOneBlog(){
    this.blogService.getBlog(this.blogId).subscribe(
      res => {
        this.blog = res;
        console.log("blog:",this.blog);
        this.vote = this.blog.upvote - this.blog.downvote
        console.log("this.vote:",this.vote);
      },
      err => {
        console.log(err);
      },
    );
  }


}
