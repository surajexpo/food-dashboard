import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkquestionComponent } from './gkquestion.component';

describe('GkquestionComponent', () => {
  let component: GkquestionComponent;
  let fixture: ComponentFixture<GkquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkquestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GkquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
