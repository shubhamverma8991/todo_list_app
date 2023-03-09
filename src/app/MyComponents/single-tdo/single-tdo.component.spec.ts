import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTdoComponent } from './single-tdo.component';

describe('SingleTdoComponent', () => {
  let component: SingleTdoComponent;
  let fixture: ComponentFixture<SingleTdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
