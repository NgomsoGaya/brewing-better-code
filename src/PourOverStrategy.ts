import { BrewingStrategy } from './BrewingStrategy';

export class PourOverStrategy implements BrewingStrategy {
  public brew(): string {
    return 'Brewing coffee with a pour-over method.';
  }
}