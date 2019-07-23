
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { RestService } from './rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  data: any;
  constructor(private service: RestService) {

  }
  getData() {
    this.service.getData().subscribe(
      (res: HttpResponse<any>) => {
        console.log(res);
        console.log(res.status);
      //  this.data = res.body;
    this.data=    res.body['login'];
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err);
      });
  }
}
