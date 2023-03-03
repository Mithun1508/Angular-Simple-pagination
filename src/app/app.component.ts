import { Component } from '@angular/core';
import { FetchdataService } from './fetchdata.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

//1.) to use simple pagination you have to just add one package which name is ngx-pagination
// URL:- https://www.npmjs.com/package/ngx-pagination

// 2.) import that package

// 3.) now just write a code with the ngfor loop with pipe like:- 
//  | paginate: { itemsPerPage: 10, currentPage: p }"

// and the last after the for loop just write:- 
// <pagination-controls (pageChange)="p = $event" class="float-right"></pagination-controls>

export class AppComponent  {
  data: any;
  constructor(private fetchData: FetchdataService) {
    this.getData();
  }
  name = 'Angular';
  getData() {
    this.fetchData.getData().subscribe(
      (data) => {
        this.data = data;
      }
    );
  }
}
