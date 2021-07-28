import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardup',
  templateUrl: './cardup.component.html',
  styleUrls: ['./cardup.component.scss']
})
export class CardupComponent implements OnInit {

  @Input() title;
  @Input() author;
  @Input() upvote;
  @Input() downvote;

  vote


  constructor() { }

  ngOnInit(): void {
    this.vote = this.upvote - this.downvote ;
    console.log("vote",this.vote)
  }

}
