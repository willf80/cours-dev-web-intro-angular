import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public resultat = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public calculer(nbre1: string, nbre2: string, operateur: string): void {
    const nbre1Number = parseInt(nbre1);
    const nbre2Number = +nbre2;

    if(operateur === '+') {
      this.resultat = nbre1Number + nbre2Number;
    } else if (operateur === '-') {
      this.resultat = nbre1Number - nbre2Number;
    } else if (operateur === '*') {
      this.resultat = nbre1Number * nbre2Number;
    } else {
      this.resultat = nbre1Number / nbre2Number;
    }
  }

  public calculate(nbre1: number, nbre2: number, operateur: string): void {
    if(operateur === '+') {
      this.resultat = nbre1 + nbre2;
    } else if (operateur === '-') {
      this.resultat = nbre1 - nbre2;
    } else if (operateur === '*') {
      this.resultat = nbre1 * nbre2;
    } else {
      this.resultat = nbre1 / nbre2;
    }
  }

}
