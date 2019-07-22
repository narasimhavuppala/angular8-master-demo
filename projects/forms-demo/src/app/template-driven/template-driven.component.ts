import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {


    console.log(this.username);
    console.log(this.password);
  }

}
