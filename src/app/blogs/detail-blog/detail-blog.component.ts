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
  upvote
  downvote

  ngOnInit(): void {
    this.getOneBlog();
  }
  
  getOneBlog(){
    this.blogService.getBlog(this.blogId).subscribe(
      res => {
        this.blog = res;
        this.upvote = this.blog.upvote
        this.downvote = this.blog.downvote
        this.vote = this.upvote - this.downvote
        console.log("res:",res);
      },
      err => {
        console.log(err);
      },
    );
  }

  up(){
    this.upvote ++;
    this.vote ++;
    var val = {
      title:this.blog.title,
      content:this.blog.content,
      author:this.blog.author,
      upvote:this.upvote,
      downvote:this.downvote
    };
    this.blogService.editBlog(this.blogId,val).subscribe(res=>{
    });
    console.log("val",val)
  }

  down(){
    this.downvote ++;
    this.vote --;

    var val = {
      title:this.blog.title,
      content:this.blog.content,
      author:this.blog.author,
      upvote:this.upvote,
      downvote:this.downvote
    };
    this.blogService.editBlog(this.blogId,val).subscribe(res=>{
    });
    console.log("val",val)
  }


}
