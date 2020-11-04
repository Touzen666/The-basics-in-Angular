import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetTwoComponent } from './componet-two.component';

describe('ComponetTwoComponent', () => {
  let component: ComponetTwoComponent;
  let fixture: ComponentFixture<ComponetTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
