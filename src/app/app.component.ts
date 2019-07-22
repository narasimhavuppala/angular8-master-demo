import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Event Binding
  title = 'demo-project';

  changeMe(){
    this.title="Changed Title";
  }
}
