import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerviedComponent } from './dervied.component';

describe('DerviedComponent', () => {
  let component: DerviedComponent;
  let fixture: ComponentFixture<DerviedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerviedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerviedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
