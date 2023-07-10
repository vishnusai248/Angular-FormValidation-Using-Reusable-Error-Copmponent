import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationerrorsComponent } from './validationerrors.component';

describe('ValidationerrorsComponent', () => {
  let component: ValidationerrorsComponent;
  let fixture: ComponentFixture<ValidationerrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationerrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
