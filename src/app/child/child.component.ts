import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Input() isSumm: boolean = true;

  get res(): number {
    if (this.isSumm)
      return this.num1 + this.num2;
    return this.num1 - this.num2;
  }
}
