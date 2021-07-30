import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-list-blogs-unfil',
  templateUrl: './list-blogs-unfil.component.html',
  styleUrls: ['./list-blogs-unfil.component.scss']
})
export class ListBlogsUnfilComponent implements OnInit {

  constructor(private router: Router, private blogService:BlogService) { }
  @Input() blogs;
  vote = true;

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
