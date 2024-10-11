 // src/models/Cappuccino.ts
 import { Coffee } from './Coffee';
 import { CoffeeVisitor } from '../visitors/CoffeeVisitor';
 
 export class Cappuccino implements Coffee {
   accept(visitor: CoffeeVisitor): void {
     visitor.visitCappuccino(this);
   }
 
   cost(): number {
     return 4.0;
   }
 
   calories(): number {
     return 100;
   }
 }
 