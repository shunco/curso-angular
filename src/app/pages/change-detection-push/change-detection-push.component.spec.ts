import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPushComponent } from './change-detection-push.component';

describe('ChangeDetectionPushComponent', () => {
  let component: ChangeDetectionPushComponent;
  let fixture: ComponentFixture<ChangeDetectionPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
