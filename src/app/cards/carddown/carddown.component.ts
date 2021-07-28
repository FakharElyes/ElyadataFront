import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carddown',
  templateUrl: './carddown.component.html',
  styleUrls: ['./carddown.component.scss']
})
export class CarddownComponent implements OnInit {
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
