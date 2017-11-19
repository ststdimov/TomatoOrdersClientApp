import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TomatoOrdersComponent } from './tomato-orders.component';
import { TomatoOrdersService } from './tomato-orders.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [TomatoOrdersComponent],
  providers: [TomatoOrdersService],
  exports: [TomatoOrdersComponent]
})
export class TomatoOrdersModule { }
