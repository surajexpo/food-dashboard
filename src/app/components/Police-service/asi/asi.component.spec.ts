import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASIComponent } from './asi.component';

describe('ASIComponent', () => {
  let component: ASIComponent;
  let fixture: ComponentFixture<ASIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
