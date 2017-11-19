import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { TomatoOrdersComponent } from './tomato-orders.component';
import { TomatoOrdersService } from './tomato-orders.service';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import { DebugElement } from '@angular/core';

const TEST_ORDERS = [{
  id: 1,
  provider: 'Heinz',
  timestamp: 0,
  tomatoes: 100
},
{
  id: 2,
  provider: 'Heinz',
  timestamp: 0,
  tomatoes: 200
},
{
  id: 3,
  provider: 'Heinz',
  timestamp: 0,
  tomatoes: 300
},
];


describe('TomatoOrdersComponent', () => {
  let tomatoOrdersComponent: TomatoOrdersComponent;
  let fixture: ComponentFixture<TomatoOrdersComponent>;
  let tomatoOrdersService: TomatoOrdersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [TomatoOrdersComponent],
      providers: [TomatoOrdersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoOrdersComponent);
    tomatoOrdersComponent = fixture.componentInstance;
    tomatoOrdersService = fixture.debugElement.injector.get(TomatoOrdersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(tomatoOrdersComponent).toBeTruthy();
  });

  it('should call tomatoOrders service', () => {
    // Arrange
    const res = spyOn(tomatoOrdersService, 'getTomatoOrders').and.callFake(t => {
      return Observable.empty();
    });

    // Act
    tomatoOrdersComponent.onRefreshClicked(null);
    fixture.detectChanges();
    // Assert
    expect(res).toHaveBeenCalled();
  });

  it('should return same number of orders', () => {
    spyOn(tomatoOrdersService, 'getTomatoOrders').and.callFake(() => {
      return Observable.from([
        TEST_ORDERS
      ]);
    });

    // Act
    tomatoOrdersComponent.onRefreshClicked(null);
    fixture.detectChanges();

    // Assert
    expect(tomatoOrdersComponent.tomatoOrders.length).toBe(3);
  });

  it('should return populate providers of orders', () => {
    spyOn(tomatoOrdersService, 'getTomatoOrders').and.callFake(() => {
      return Observable.from([
        TEST_ORDERS
      ]);
    });

    // Act
    tomatoOrdersComponent.onRefreshClicked(null);

    // Assert
    fixture.whenRenderingDone().then(() => {

      const providers: DebugElement = fixture.debugElement.query(By.css('.provider'));
      expect(providers.nativeElement.textContent).toContain('Heinz');
    });

    fixture.detectChanges();
  });

  it('should call refresh handler on click button event', () => {
    // Arrange
    const res = spyOn(tomatoOrdersComponent, 'onRefreshClicked').and.callFake(t => {
      return Observable.empty();
    });
    const refreshButton = fixture.debugElement.nativeElement.querySelector('button');
    // Act
    refreshButton.click();
    fixture.detectChanges();
    // Assert
    expect(res).toHaveBeenCalled();
  });
});
