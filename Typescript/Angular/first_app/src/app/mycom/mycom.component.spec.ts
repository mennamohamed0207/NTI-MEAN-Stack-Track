import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomComponent } from './mycom.component';

describe('MycomComponent', () => {
  let component: MycomComponent;
  let fixture: ComponentFixture<MycomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
