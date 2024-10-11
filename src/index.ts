import { SimpleCoffee } from './SimpleCoffee';
import { MilkDecorator } from './MilkDecorator';
import { SugarDecorator } from './SugarDecorator';
import { CreamDecorator } from './CreamDecorator';

let coffee: SimpleCoffee = new SimpleCoffee();
console.log(coffee.description()); // Simple coffee
console.log(coffee.cost()); // 5

coffee = new MilkDecorator(coffee);
console.log(coffee.description()); // Simple coffee, with milk
console.log(coffee.cost()); // 6.5

coffee = new SugarDecorator(coffee);
console.log(coffee.description()); // Simple coffee, with milk, with sugar
console.log(coffee.cost()); // 7.0

coffee = new CreamDecorator(coffee);
console.log(coffee.description()); // Simple coffee, with milk, with sugar, with cream
console.log(coffee.cost()); // 8.0

// src/index.ts
import { Espresso } from './models/Espresso';
import { Latte } from './models/Latte';
import { Cappuccino } from './models/Cappuccino';
import { DiscountVisitor } from './visitors/DiscountVisitor';
import { CalorieVisitor } from './visitors/CalorieVisitor';

const espresso = new Espresso();
const latte = new Latte();
const cappuccino = new Cappuccino();

const discountVisitor = new DiscountVisitor();
const calorieVisitor = new CalorieVisitor();

// Apply discount visitor
espresso.accept(discountVisitor);   // Espresso cost after discount: 2.7
latte.accept(discountVisitor);      // Latte cost after discount: 3.825
cappuccino.accept(discountVisitor); // Cappuccino cost after discount: 3.2

// Apply calorie visitor
espresso.accept(calorieVisitor);   // Espresso has 50 calories
latte.accept(calorieVisitor);      // Latte has 150 calories
cappuccino.accept(calorieVisitor); // Cappuccino has 100 calories
