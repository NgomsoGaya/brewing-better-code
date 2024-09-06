import { BrewingStrategy } from './BrewingStrategy';

export class FrenchPressStrategy implements BrewingStrategy {
  public brew(): string {
    return 'Brewing coffee with a French press.';
  }
}