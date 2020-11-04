import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetOneComponent } from './componet-one.component';

describe('ComponetOneComponent', () => {
  let component: ComponetOneComponent;
  let fixture: ComponentFixture<ComponetOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
