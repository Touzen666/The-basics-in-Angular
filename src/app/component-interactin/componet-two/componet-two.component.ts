import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componet-two',
  templateUrl: './componet-two.component.html',
  styleUrls: ['./componet-two.component.css']
})
export class ComponetTwoComponent implements OnInit {
  @Input('data') public name ;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  exampleEvent(){
this.childEvent.emit('Good job bro')
  }

}
