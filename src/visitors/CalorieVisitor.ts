// src/visitors/CalorieVisitor.ts
import { CoffeeVisitor } from './CoffeeVisitor';
import { Espresso } from '../models/Espresso';
import { Latte } from '../models/Latte';
import { Cappuccino } from '../models/Cappuccino';

export class CalorieVisitor implements CoffeeVisitor {
  visitEspresso(espresso: Espresso): void {
    console.log(`Espresso has ${espresso.calories()} calories`);
  }

  visitLatte(latte: Latte): void {
    console.log(`Latte has ${latte.calories()} calories`);
  }

  visitCappuccino(cappuccino: Cappuccino): void {
    console.log(`Cappuccino has ${cappuccino.calories()} calories`);
  }
}