import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TomatoOrder } from './models/tomato-order';
/**
 * Service used to retrieve orders from the sever.
 * The baseUrl points to the server application
 * which serves the outgoing GET requests from this
 * Angular application. If your bacend application is runing at different URL
 * please change the baseUrl value.
 *
 *
 * @export
 * @class TomatoOrdersService
 */
@Injectable()
export class TomatoOrdersService {

  private baseUrl = 'http://localhost:8080';
  private tomatoOrdersUri = '/orders/data';

  constructor(private httpClient: HttpClient) { }

  public getTomatoOrders(size: number): Observable<TomatoOrder[]> {
    const fullUrl = this.baseUrl + this.tomatoOrdersUri;
    let params: HttpParams = new HttpParams();

    if (size) {
      params = params.append('size', size.toString());
    }

    console.log(params.get('size'));
    return this.httpClient.get<TomatoOrder[]>(fullUrl, { params: params});
  }
}
