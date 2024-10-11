// src/models/Espresso.ts
import { CoffeeVisitor } from '../visitors/CoffeeVisitor';

// src/models/Coffee.ts
export interface Coffee {
    accept(visitor: CoffeeVisitor): void;
  }
  


  
 