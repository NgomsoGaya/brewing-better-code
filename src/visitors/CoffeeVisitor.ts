// src/visitors/CoffeeVisitor.ts
import { Espresso } from '../models/Espresso';
import { Latte } from '../models/Latte';
import { Cappuccino } from '../models/Cappuccino';

export interface CoffeeVisitor {
  visitEspresso(espresso: Espresso): void;
  visitLatte(latte: Latte): void;
  visitCappuccino(cappuccino: Cappuccino): void;
}
