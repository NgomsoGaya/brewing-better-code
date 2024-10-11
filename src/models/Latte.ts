 // src/models/Latte.ts
 import { Coffee } from './Coffee';
 import { CoffeeVisitor } from '../visitors/CoffeeVisitor';
 
 export class Latte implements Coffee {
   accept(visitor: CoffeeVisitor): void {
     visitor.visitLatte(this);
   }
 
   cost(): number {
     return 4.5;
   }
 
   calories(): number {
     return 150;
   }
 }