import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.scss']
})
export class AddBlogsComponent implements OnInit {

  title:string;
  content:string;
  author:string;

  constructor(private service:BlogService) { }

  ngOnInit(): void {
  }

  addBlog(){
    var val = {
      title:this.title,
      content:this.content,
      author:this.author,
      upvote:"0",
      downvote:"0"
    };
    this.service.addBlog(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
