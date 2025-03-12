import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  emteredInitialInvestment = signal('0');
  emteredAnnualInvestment = signal('0');
  emteredExpectedReturn = signal('5');
  emteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.emteredInitialInvestment(),
      annualInvestment: +this.emteredAnnualInvestment(),
      duration: +this.emteredDuration(),
      expectedReturn: +this.emteredExpectedReturn(),
    });
  }
}
