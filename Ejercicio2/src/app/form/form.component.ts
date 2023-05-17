import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  sum: number = 5;

  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidMessage: boolean = false;
  invalidSum: boolean = false;

  num1: number;
  num2: number;

  constructor(private dataService: DataService) {
    this.num1 = 2;
    this.num2 = 3;
  }

  submitForm() {
    this.invalidName = this.name === undefined || this.name.trim() === '';
    this.invalidEmail = this.email === undefined || !this.isValidEmail(this.email);
    this.invalidMessage = this.message === undefined || this.message.trim() === '';
    this.invalidSum = this.sum !== (this.num1 + this.num2);

    if (!this.invalidName && !this.invalidEmail && !this.invalidMessage && !this.invalidSum) {
      const datos = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      this.dataService.setData(datos);
      this.resetForm();
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.sum = undefined!;
    this.invalidName = false;
    this.invalidEmail = false;
    this.invalidMessage = false;
    this.invalidSum = false;
    this.num1 = 2;
    this.num2 = 3;
  }

  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
