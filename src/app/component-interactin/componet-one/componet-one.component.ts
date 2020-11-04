import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componet-one',
  templateUrl: './componet-one.component.html',
  styleUrls: ['./componet-one.component.css']
})
export class ComponetOneComponent implements OnInit {
public name ="Bartosz";
public message ="";
  constructor() { }

  ngOnInit(): void {
  }

}
