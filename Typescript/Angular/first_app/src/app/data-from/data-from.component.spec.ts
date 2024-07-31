import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFromComponent } from './data-from.component';

describe('DataFromComponent', () => {
  let component: DataFromComponent;
  let fixture: ComponentFixture<DataFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
