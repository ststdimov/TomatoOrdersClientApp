import { Component, OnInit } from '@angular/core';
import { TomatoOrdersService } from './tomato-orders.service';
import { TomatoOrder } from './models/tomato-order';
/**
 * This component implements logic to retrieve
 * amount of tomato orders and display them
 * in a table. After the user enters number of orders
 * and click the 'Refresh' button, the retrieved
 * orders are populated.
 *
 *
 * @export
 * @class TomatoOrdersComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-tomato-orders',
  templateUrl: './tomato-orders.component.html',
  styleUrls: ['./tomato-orders.component.css']
})
export class TomatoOrdersComponent implements OnInit {

  private _tomatoOrders: TomatoOrder[] = [];
  private _tomatoOrdersSize: number;
  constructor(private tomatoOrdersService: TomatoOrdersService) { }

  ngOnInit() {

  }

  public timestampToDate(timestamp: number) {
    return new Date(timestamp);
  }

  public onRefreshClicked(event) {
    this.tomatoOrdersService.getTomatoOrders(this.tomatoOrdersSize)
      .subscribe((tomatoOrders: TomatoOrder[]) => {
        this._tomatoOrders = tomatoOrders;
        console.log('Tomato orders ', tomatoOrders);
      });
  }

  public get tomatoOrders() {
    return this._tomatoOrders;
  }

  public set tomatoOrders(orders: TomatoOrder[]) {
    this._tomatoOrders = orders;
  }

  public get tomatoOrdersSize() {
    return this._tomatoOrdersSize;
  }

  public set tomatoOrdersSize(size: number) {
     this._tomatoOrdersSize = size;
  }
}
