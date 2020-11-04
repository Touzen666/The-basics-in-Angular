import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
 public name = "bartosz";
 public message = "this is some massge for you";
 public object ={
   name: "Bartosz",
   lastName: "Ochędowski"
 }
  constructor() { }

  ngOnInit(): void {
  }

}
