import { Coffe } from './coffe';

export class SugarDecorator implements Coffe {
  private coffee: Coffe;

  constructor(coffee: Coffe) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 0.5; // Sugar adds $0.50 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with sugar`;
  }
}
