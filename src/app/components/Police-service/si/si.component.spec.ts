import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SIComponent } from './si.component';

describe('SIComponent', () => {
  let component: SIComponent;
  let fixture: ComponentFixture<SIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
