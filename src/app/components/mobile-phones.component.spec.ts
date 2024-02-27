import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhonesComponent } from './mobile-phones.component';

describe('MobilePhonesComponent', () => {
  let component: MobilePhonesComponent;
  let fixture: ComponentFixture<MobilePhonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePhonesComponent]
    });
    fixture = TestBed.createComponent(MobilePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
