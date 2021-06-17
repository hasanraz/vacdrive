import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccenterComponent } from './vaccenter.component';

describe('VaccenterComponent', () => {
  let component: VaccenterComponent;
  let fixture: ComponentFixture<VaccenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
