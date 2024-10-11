import { Coffe } from './coffe';

export class MilkDecorator implements Coffe {
  private coffee: Coffe;

  constructor(coffee: Coffe) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1.5; // Milk adds $1.50 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}
