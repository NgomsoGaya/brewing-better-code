import { Coffe } from './coffe';

export class CreamDecorator implements Coffe {
  private coffee: Coffe;

  constructor(coffee: Coffe) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1.0; // Cream adds $1.00 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with cream`;
  }
}
