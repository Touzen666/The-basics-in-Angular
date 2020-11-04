import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfNgforNgSwitchComponent } from './ng-if-ngfor-ng-switch.component';

describe('NgIfNgforNgSwitchComponent', () => {
  let component: NgIfNgforNgSwitchComponent;
  let fixture: ComponentFixture<NgIfNgforNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfNgforNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfNgforNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
