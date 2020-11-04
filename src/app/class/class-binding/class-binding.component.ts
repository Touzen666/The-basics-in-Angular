import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  styles:[`
      .text-succes {
        color: green;
    }
    .text-dangar {
        color: red;
    }
    .text-special {
        font-style:italic;
    }   
`],
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
public hasError = true;
public isSpecial = true;
public succesClass = "text-succes";

public messageClasses = {
  "text-succes":!this.hasError,
  "text-dangar":this.hasError,
  "text-special":this.hasError,
}
  constructor() { }

  ngOnInit(): void {
  }

}
