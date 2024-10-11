import { Coffe } from './coffe';

export class SimpleCoffee implements Coffe {
  cost(): number {
    return 5; // Base price for a simple coffee
  }

  description(): string {
    return "Simple coffee";
  }
}
