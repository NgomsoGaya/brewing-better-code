  // src/models/Espresso.ts
  import { Coffee } from './Coffee';
  import { CoffeeVisitor } from '../visitors/CoffeeVisitor';
  
  export class Espresso implements Coffee {
    accept(visitor: CoffeeVisitor): void {
      visitor.visitEspresso(this);
    }
  
    cost(): number {
      return 3.0;
    }
  
    calories(): number {
      return 50;
    }
  }
  