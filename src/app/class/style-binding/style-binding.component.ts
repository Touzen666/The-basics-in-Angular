import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public hasError = false;
  public isSpecial = true;

  public color = "orange";

  public myStyle ={
    color: "blue",
    fontStyle: "italic"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
