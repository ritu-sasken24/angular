import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecSclComponent } from './sec-scl.component';

describe('SecSclComponent', () => {
  let component: SecSclComponent;
  let fixture: ComponentFixture<SecSclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecSclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecSclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
