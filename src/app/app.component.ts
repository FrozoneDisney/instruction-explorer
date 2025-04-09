import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpcodeInputComponent } from './opcode-input/opcode-input.component';
import { DecodedOutputComponent } from './decoded-output/decoded-output.component';
import { DisassemblerService } from './disassembler.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, OpcodeInputComponent, DecodedOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'instruction-explorer';

  disassembledInstruction: string | null = null;

  constructor(private disassembler: DisassemblerService){}

  onDisassemble(hex: string): void
  {
    this.disassembledInstruction = this.disassembler.disassemble(hex);
  }
}
