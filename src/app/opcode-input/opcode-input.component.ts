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
  @Output() decoded = new EventEmitter<string>();

  decode()
  {
    this.decoded.emit(this.inputHex);
  }
}
