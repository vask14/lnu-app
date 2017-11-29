import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeformNewComponent } from './homeform-new.component';

describe('HomeformNewComponent', () => {
  let component: HomeformNewComponent;
  let fixture: ComponentFixture<HomeformNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeformNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeformNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
