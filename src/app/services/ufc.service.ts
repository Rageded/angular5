import { Injectable } from '@angular/core';
// import { HttpModule } from '@angular/http'; //old way
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap} from 'rxjs/operators';

import { fighter } from '../models/fighter';

@Injectable()

export class UfcService {

  private ufcUrl = 'https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/iphone/';

  constructor(private http: HttpClient) { }

  getFighters (): Observable<fighter[]> {
  	return this.http.get<fighter[]>(this.ufcUrl + 'fighters');
  }

  getFighter (id: number): Observable<any> {
  	return this.http.get<any>(this.ufcUrl + 'fighters/' + id)
  		.map((res: Response) => res.text())
  		
  }


}
