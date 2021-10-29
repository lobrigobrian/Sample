import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isToggle:boolean=false;
  @Input() date:number = new Date().getFullYear();
  @Input() title:string ='';
  constructor() {
  }

  ngOnInit(): void {
  }

}