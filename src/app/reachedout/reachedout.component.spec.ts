import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachedoutComponent } from './reachedout.component';

describe('ReachedoutComponent', () => {
  let component: ReachedoutComponent;
  let fixture: ComponentFixture<ReachedoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReachedoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
