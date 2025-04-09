import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decoded-output',
  imports: [CommonModule],
  templateUrl: './decoded-output.component.html',
  styleUrl: './decoded-output.component.scss'
})
export class DecodedOutputComponent {
  @Input() instruction: string | null = null
}
