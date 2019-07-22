import { Observable } from 'rxjs';
import { error } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  public data: any;
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<object> {

    return this.httpClient.get(
      'https://api.github.com/users/narasimhavuppala',
      { observe: 'response' }
    );
  }

  postData() {
    this.httpClient.post('url', {}, { headers: new HttpHeaders().set('key', 'value') }
    );
  }

}
