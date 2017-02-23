import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  public data:any;
  public loadingStatus: boolean = false;

  constructor(private http: Http) { }

  getPhotoById(id) {
    this.loadingStatus = true;
    this.http.request('http://jsonplaceholder.typicode.com/photos/'+id)
      .subscribe(
        (res: Response) => {
          this.data = res.json();
          this.loadingStatus = false;
        }
      );
  }

}
