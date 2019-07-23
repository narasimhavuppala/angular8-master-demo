import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Event Binding
  title = 'Sundeep';

  pi=3.15789;


  amount=100;

  percentpipedemo=0.25;

  decimalPipe=0.25367894567;

  testMessage = "From Parent";

  isShow = false;

  btnLabel = 'Hide';

  childMessage="Hello World";

  // People Names Array
  people: any[] = [];

  addPerson(namex: string) {
    this.people.push({ name: namex });
    console.log(this.people)
  }

  toggle() {
    this.isShow = !this.isShow;
    this.btnLabel = this.isShow ? 'Show' : 'Hide';//Ternary Operator
  }

  greet(name: string) {
    alert('Hey ' + name);
 
  }

  changeMe(){
    this.title="Updated title At: " + Date.now(); //Epoch Seconds
  }
}
