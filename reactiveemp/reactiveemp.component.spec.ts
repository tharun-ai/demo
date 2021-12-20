import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveempComponent } from './reactiveemp.component';

describe('ReactiveempComponent', () => {
  let component: ReactiveempComponent;
  let fixture: ComponentFixture<ReactiveempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
