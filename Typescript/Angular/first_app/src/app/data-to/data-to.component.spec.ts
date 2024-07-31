import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataToComponent } from './data-to.component';

describe('DataToComponent', () => {
  let component: DataToComponent;
  let fixture: ComponentFixture<DataToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
