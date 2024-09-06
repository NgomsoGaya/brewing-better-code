
// EspressoStrategy.ts
import { BrewingStrategy } from './BrewingStrategy';

export class EspressoStrategy implements BrewingStrategy {
  public brew(): string {
    return 'Brewing coffee with an espresso machine.';
  }
}