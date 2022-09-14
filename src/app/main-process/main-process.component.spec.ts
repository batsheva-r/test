import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcessComponent } from './main-process.component';

describe('MainProcessComponent', () => {
  let component: MainProcessComponent;
  let fixture: ComponentFixture<MainProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
