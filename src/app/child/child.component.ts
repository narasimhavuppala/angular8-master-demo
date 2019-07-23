import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage:string;

  @Output() greetEvent = new EventEmitter();
  name = 'from Child Component';
  constructor() { }

  ngOnInit() {
  }

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

}
