import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.html',
  styleUrls: ['./temp-converter.css'],
})
export class TempConverter {
  result = 0;

  add(v1: string, v2: string): void {
    this.result = Number(v1) + Number(v2);
  }

  subtract(v1: string, v2: string): void {
    this.result = Number(v1) - Number(v2);
  }

  multiply(v1: string, v2: string): void {
    this.result = Number(v1) * Number(v2);
  }

  divide(v1: string, v2: string): void {
    this.result = Number(v1) / Number(v2);
  }
}
