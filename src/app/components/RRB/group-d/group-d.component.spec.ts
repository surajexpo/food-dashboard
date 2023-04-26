import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDComponent } from './group-d.component';

describe('GroupDComponent', () => {
  let component: GroupDComponent;
  let fixture: ComponentFixture<GroupDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
