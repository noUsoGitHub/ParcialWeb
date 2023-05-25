import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirlibroComponent } from './anadirlibro.component';

describe('AnadirlibroComponent', () => {
  let component: AnadirlibroComponent;
  let fixture: ComponentFixture<AnadirlibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnadirlibroComponent]
    });
    fixture = TestBed.createComponent(AnadirlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
