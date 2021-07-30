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
  content;
  title;
  author;

  blogsauthor;

  text="test"

  listUnfiltred = true;
  listFiltredContent = false;
  listFiltredTitle = false;
  listFiltredAuthor = false;

  ngOnInit(): void {
    this.getAllBlogs();
  }


  addClick(){
    this.ActivateAddBlog=true;
    console.log("this.ActivateAddBlog",this.ActivateAddBlog)
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



  closeClick(){
    this.ActivateAddBlog=false;
  }

  onCardClick(id){
    localStorage.setItem('id', id);
    this.router.navigateByUrl('/details');
  }


  searchContent(){
    this.listUnfiltred = false;
    this.listFiltredContent = true;
    this.listFiltredTitle = false;
    this.listFiltredAuthor = false;
  }

  searchTitle(){
    this.listUnfiltred = false;
    this.listFiltredContent = false;
    this.listFiltredTitle = true;
    this.listFiltredAuthor = false;
  }

  searchAuthor(){
    this.blogs.forEach(element => {
      if(element.author == this.author){
      console.log(element.id)}});

    this.listUnfiltred = false;
    this.listFiltredContent = false;
    this.listFiltredTitle = false;
    this.listFiltredAuthor = true;

    
  }

}
