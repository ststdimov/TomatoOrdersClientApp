import { TestBed, inject } from '@angular/core/testing';

import { TomatoOrdersService } from './tomato-orders.service';
import { TomatoOrdersComponent } from './tomato-orders.component';
import { HttpClientModule } from '@angular/common/http';

describe('TomatoOrdersService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TomatoOrdersService]
    });
  });

  it('should be created', inject([TomatoOrdersService], (service: TomatoOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
