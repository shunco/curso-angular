import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalComponentsComponent } from './internal-components.component';

describe('InternalComponentsComponent', () => {
  let component: InternalComponentsComponent;
  let fixture: ComponentFixture<InternalComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
