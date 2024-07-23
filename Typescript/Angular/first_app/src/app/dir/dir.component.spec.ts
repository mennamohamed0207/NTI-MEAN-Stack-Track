import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirComponent } from './dir.component';
import { beforeEach, describe, it } from 'node:test';

describe('DirComponent', () => {
  let component: DirComponent;
  let fixture: ComponentFixture<DirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
