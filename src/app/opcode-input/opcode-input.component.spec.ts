import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcodeInputComponent } from './opcode-input.component';

describe('OpcodeInputComponent', () => {
  let component: OpcodeInputComponent;
  let fixture: ComponentFixture<OpcodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcodeInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
