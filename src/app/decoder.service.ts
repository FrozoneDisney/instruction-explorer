import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecoderService {
  private w1regs = ['AX', 'CX', 'DX', 'BX', 'SP', 'BP', 'SI', 'DI'];
  private w0regs = ['AL', 'CL', 'DL', 'BL', 'AH', 'CH', 'DH', 'BH'];
  
  decode(byteString: string): string {
    const bytes = byteString.trim().split(" ").map((b) => parseInt(b, 16));
    const opcode = bytes[0];
    let output = 'null';
    switch(opcode){
      case 136:
        output = `MOV ${this.registerDecode(bytes[1] & 7, false)}, ${this.registerDecode((bytes[1] >> 3) & 7, false)}`
        break;
      case 137:
        output = `MOV ${this.registerDecode(bytes[1] & 7, true)}, ${this.registerDecode((bytes[1] >> 3) & 7, true)}`
        break;
      default: output = "Instruction not supported";
    }
    return output;
  }

  registerDecode(regByte: number, w: boolean): string
  {
    let output = 'not found'
    if(w)
    {
      output = this.w1regs[regByte]
    }
    else
    {
      output = this.w0regs[regByte]
    }

    return output;
  }
}
