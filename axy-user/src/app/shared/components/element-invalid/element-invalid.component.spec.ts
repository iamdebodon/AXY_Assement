import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInvalidComponent } from './element-invalid.component';

describe('ElementInvalidComponent', () => {
  let component: ElementInvalidComponent;
  let fixture: ComponentFixture<ElementInvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementInvalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
