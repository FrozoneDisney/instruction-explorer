import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodedOutputComponent } from './decoded-output.component';

describe('DecodedOutputComponent', () => {
  let component: DecodedOutputComponent;
  let fixture: ComponentFixture<DecodedOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecodedOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodedOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
