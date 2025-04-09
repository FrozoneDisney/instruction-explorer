import { TestBed } from '@angular/core/testing';

import { DisassemblerService } from './disassembler.service';

describe('DisassemblerService', () => {
  let service: DisassemblerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisassemblerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should disassemble MOV instructions with word length registers and byte length', () => {
    expect(service.disassemble("89 CB")).toEqual('MOV BX, CX');
    expect(service.disassemble("88 CB")).toEqual('MOV BL, CL');
  });

  it('should fail when an unsupported instruction is being input', () => {
    expect(service.disassemble("82 CB")).toEqual('Instruction not supported');
  })
});
