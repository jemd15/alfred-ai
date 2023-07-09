import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfredComponent } from './alfred.component';

describe('AlfredComponent', () => {
  let component: AlfredComponent;
  let fixture: ComponentFixture<AlfredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfredComponent]
    });
    fixture = TestBed.createComponent(AlfredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
