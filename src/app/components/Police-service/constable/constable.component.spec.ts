import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstableComponent } from './constable.component';

describe('ConstableComponent', () => {
  let component: ConstableComponent;
  let fixture: ComponentFixture<ConstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
