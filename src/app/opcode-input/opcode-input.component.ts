import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opcode-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './opcode-input.component.html',
  styleUrl: './opcode-input.component.scss'
})
export class OpcodeInputComponent {
  inputHex: string = '';
  @Output() disassembled = new EventEmitter<string>();

  disassemble(): void
  {
    this.disassembled.emit(this.inputHex);
  }
}
