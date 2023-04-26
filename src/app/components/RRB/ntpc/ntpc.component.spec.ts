import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTPCComponent } from './ntpc.component';

describe('NTPCComponent', () => {
  let component: NTPCComponent;
  let fixture: ComponentFixture<NTPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NTPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
