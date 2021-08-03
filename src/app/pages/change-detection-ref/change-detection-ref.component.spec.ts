import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionRefComponent } from './change-detection-ref.component';

describe('ChangeDetectionRefComponent', () => {
  let component: ChangeDetectionRefComponent;
  let fixture: ComponentFixture<ChangeDetectionRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
