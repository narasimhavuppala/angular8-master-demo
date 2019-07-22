import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Event Binding
  title = 'demo-project';

  isShow = false;

  btnLabel = 'Hide';

  // People Names Array
  people: any[] = [];

  addPerson(namex: string) {
    this.people.push({ name: namex });
  }

  toggle() {
    this.isShow = !this.isShow;
    this.btnLabel = this.isShow ? 'Show' : 'Hide';
  }
}
