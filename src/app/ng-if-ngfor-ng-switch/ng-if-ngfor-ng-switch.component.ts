import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ngfor-ng-switch',
  templateUrl: './ng-if-ngfor-ng-switch.component.html',
  styleUrls: ['./ng-if-ngfor-ng-switch.component.css']
})
export class NgIfNgforNgSwitchComponent implements OnInit {

  public showHidden = false;
  public color = "blue"
  public colors =["red","blue","green", "white","black"];
  constructor() { }

  ngOnInit(): void {
  }
showName(showHidden){
  this.showHidden = !this.showHidden;
}
}
