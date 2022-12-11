import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Home Page";
  courses=["Angular","React","Vue Js","Node Js"]
  imageURL="https://picsum.photos/200/300"
  constructor() { }

  ngOnInit(): void {
  }
  abc(){
    alert("Event Fire")
  }

}
