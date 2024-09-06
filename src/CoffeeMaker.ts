
// CoffeeMaker.ts
import { BrewingStrategy } from './BrewingStrategy';

export class CoffeeMaker {
  private strategy: BrewingStrategy;

  constructor(strategy: BrewingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: BrewingStrategy): void {
    this.strategy = strategy;
  }

  public brewCoffee(): string {
    return this.strategy.brew();
  }
}