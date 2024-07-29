import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingPipesComponent } from './using-pipes.component';

describe('UsingPipesComponent', () => {
  let component: UsingPipesComponent;
  let fixture: ComponentFixture<UsingPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
