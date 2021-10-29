import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() isClickLike:boolean=false;
  @Input() isClickHeart:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}