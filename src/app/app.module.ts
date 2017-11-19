import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TomatoOrdersModule } from './tomato-orders/tomato-orders.module';



@NgModule({
  imports: [
    BrowserModule,
    TomatoOrdersModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
