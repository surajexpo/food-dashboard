import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPaperComponent } from './previous-paper.component';

describe('PreviousPaperComponent', () => {
  let component: PreviousPaperComponent;
  let fixture: ComponentFixture<PreviousPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
