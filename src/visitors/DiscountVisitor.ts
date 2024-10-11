 // src/visitors/DiscountVisitor.ts
 import { CoffeeVisitor } from './CoffeeVisitor';
 import { Espresso } from '../models/Espresso';
 import { Latte } from '../models/Latte';
 import { Cappuccino } from '../models/Cappuccino';
 
 export class DiscountVisitor implements CoffeeVisitor {
   visitEspresso(espresso: Espresso): void {
     console.log(`Espresso cost after discount: ${espresso.cost() * 0.9}`);
   }
 
   visitLatte(latte: Latte): void {
     console.log(`Latte cost after discount: ${latte.cost() * 0.85}`);
   }
 
   visitCappuccino(cappuccino: Cappuccino): void {
     console.log(`Cappuccino cost after discount: ${cappuccino.cost() * 0.8}`);
   }
 }