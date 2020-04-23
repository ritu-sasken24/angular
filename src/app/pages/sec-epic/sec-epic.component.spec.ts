import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEpicComponent } from './sec-epic.component';

describe('SecEpicComponent', () => {
  let component: SecEpicComponent;
  let fixture: ComponentFixture<SecEpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecEpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
