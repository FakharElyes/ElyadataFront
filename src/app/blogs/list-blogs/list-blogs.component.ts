import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {

  constructor(private router: Router, private blogService:BlogService ) { }

  blogs;
  vote = true;
  ActivateAddBlog:boolean=false;

  text="test"

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(
      res => {
        this.blogs = res;
        console.log("blogs:",this.blogs);
      },
      err => {
        console.log(err);
      },
    );
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

  addClick(){
    this.ActivateAddBlog=true;
    console.log("this.ActivateAddBlog",this.ActivateAddBlog)
  }



  closeClick(){
    this.ActivateAddBlog=false;
    this.getAllBlogs();
  }

  onCardClick(id){
    localStorage.setItem('id', id);
    this.router.navigateByUrl('/details');
  }




}
