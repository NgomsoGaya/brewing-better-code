import { CoffeeMaker } from '../src/CoffeeMaker';
import { EspressoStrategy } from '../src/EspressoStrategy';
import { FrenchPressStrategy } from '../src/FrenchPressStrategy';
import { PourOverStrategy } from '../src/PourOverStrategy';
import * as assert from 'assert';
import CoffeeFactory from '../src/CoffeeFactory';
import { Coffee } from '../src/Coffee';
import { CoffeeBuilder } from '../src/CoffeeBuilder';
import { CoffeeDirector } from '../src/CoffeeDirector';
import { SimpleCoffee } from '../src/SimpleCoffee';
import { MilkDecorator } from '../src/MilkDecorator';
import { SugarDecorator } from '../src/SugarDecorator';
import { CreamDecorator } from '../src/CreamDecorator';
import { Coffe } from '../src/coffe'; 

describe('strategy', () => {
    it('should brew coffee with EspressoStrategy', () => {
        const espressoStrategy = new EspressoStrategy();
        const coffeeMaker = new CoffeeMaker(espressoStrategy);

        const result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with an espresso machine.');
    });

    it('should brew coffee with FrenchPressStrategy', () => {
        const frenchPressStrategy = new FrenchPressStrategy();
        const coffeeMaker = new CoffeeMaker(frenchPressStrategy);

        const result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with a French press.');
    });

    it('should brew coffee with PourOverStrategy', () => {
        const pourOverStrategy = new PourOverStrategy();
        const coffeeMaker = new CoffeeMaker(pourOverStrategy);

        const result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with a pour-over method.');
    });

    it('should switch brewing strategies at runtime', () => {
        const espressoStrategy = new EspressoStrategy();
        const frenchPressStrategy = new FrenchPressStrategy();
        const pourOverStrategy = new PourOverStrategy();
        const coffeeMaker = new CoffeeMaker(espressoStrategy);

        coffeeMaker.setStrategy(frenchPressStrategy);
        let result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with a French press.');

        coffeeMaker.setStrategy(pourOverStrategy);
        result = coffeeMaker.brewCoffee();
        assert.strictEqual(result, 'Brewing coffee with a pour-over method.');
    });
});


describe('Singleton-Strategy', () => {
  it('should return the same instance of CoffeeFactory', () => {
    const factory1 = CoffeeFactory.getInstance();
    const factory2 = CoffeeFactory.getInstance();
    
    // Assert that both factory1 and factory2 are the same instance
    assert.equal(factory1, factory2, 'Both instances should be the same');
  });
});

describe('CoffeeFactory Brew Method', () => {
  it('should brew the correct type of coffee', () => {
    const factory = CoffeeFactory.getInstance();

    const brewedCoffee = factory.brewCoffee('Espresso');
    
    // Assert that the brewed coffee is correct
    assert.equal(brewedCoffee, 'Brewing a cup of Espresso', 'The brewed coffee type should be Espresso');
  });

  it('should brew the correct type of coffee for different types', () => {
    const factory = CoffeeFactory.getInstance();

    const brewedCoffeeLatte = factory.brewCoffee('Latte');
    
    // Assert that the brewed coffee is Latte
    assert.equal(brewedCoffeeLatte, 'Brewing a cup of Latte', 'The brewed coffee type should be Latte');
  });
});

describe('CoffeeBuilder', () => {
  
  it('should build a basic coffee with no milk and no sugar', () => {
    const builder = new CoffeeBuilder();
    const coffee: Coffee = builder.setType('Americano').setSize('Medium').build();

    assert.equal(coffee.type, 'Americano', 'The coffee type should be Americano');
    assert.equal(coffee.size, 'Medium', 'The coffee size should be Medium');
    assert.equal(coffee.sugar, 0, 'The coffee should have no sugar');
    assert.equal(coffee.milk, false, 'The coffee should have no milk');
  });

  it('should build a coffee with milk and sugar', () => {
    const builder = new CoffeeBuilder();
    const coffee: Coffee = builder.setType('Cappuccino').setSize('Large').addSugar(2).addMilk().build();

    assert.equal(coffee.type, 'Cappuccino', 'The coffee type should be Cappuccino');
    assert.equal(coffee.size, 'Large', 'The coffee size should be Large');
    assert.equal(coffee.sugar, 2, 'The coffee should have 2 sugars');
    assert.equal(coffee.milk, true, 'The coffee should have milk');
  });
});

describe('CoffeeDirector', () => {
  
  it('should make an Espresso using the director', () => {
    const builder = new CoffeeBuilder();
    const director = new CoffeeDirector(builder);

    const espresso = director.makeEspresso().build();

    assert.equal(espresso.type, 'Espresso', 'The coffee type should be Espresso');
    assert.equal(espresso.size, 'Small', 'The coffee size should be Small');
    assert.equal(espresso.sugar, 1, 'The coffee should have 1 sugar');
    assert.equal(espresso.milk, true, 'The coffee should have milk');
  });

  it('should make a Latte using the director', () => {
    const builder = new CoffeeBuilder();
    const director = new CoffeeDirector(builder);

    const latte = director.makeLatte().build();

    assert.equal(latte.type, 'Latte', 'The coffee type should be Latte');
    assert.equal(latte.size, 'Large', 'The coffee size should be Large');
    assert.equal(latte.sugar, 2, 'The coffee should have 2 sugars');
    assert.equal(latte.milk, true, 'The coffee should have milk');
  });
});

describe('Coffee Decorator Pattern', () => {
  it('should return correct description and cost for SimpleCoffee', () => {
    let myCoffee: Coffe = new SimpleCoffee();
    
    assert.equal(myCoffee.description(), 'Simple coffee', 'Description should be "Simple coffee"');
    assert.equal(myCoffee.cost(), 5, 'Cost should be 5 for SimpleCoffee');
  });

  it('should correctly add milk to a coffee', () => {
    let myCoffee: Coffe = new SimpleCoffee();
    myCoffee = new MilkDecorator(myCoffee);

    assert.equal(myCoffee.description(), 'Simple coffee, with milk', 'Description should be "Simple coffee, with milk"');
    assert.equal(myCoffee.cost(), 6.5, 'Cost should be 6.5 after adding milk');
  });

  it('should correctly add sugar to a coffee', () => {
    let myCoffee: Coffe = new SimpleCoffee();
    myCoffee = new SugarDecorator(myCoffee);

    assert.equal(myCoffee.description(), 'Simple coffee, with sugar', 'Description should be "Simple coffee, with sugar"');
    assert.equal(myCoffee.cost(), 5.5, 'Cost should be 5.5 after adding sugar');
  });

  it('should correctly add cream to a coffee', () => {
    let myCoffee: Coffe = new SimpleCoffee();
    myCoffee = new CreamDecorator(myCoffee);

    assert.equal(myCoffee.description(), 'Simple coffee, with cream', 'Description should be "Simple coffee, with cream"');
    assert.equal(myCoffee.cost(), 6.0, 'Cost should be 6.0 after adding cream');
  });

  it('should correctly handle multiple decorators (milk, sugar, cream)', () => {
    let myCoffee: Coffe = new SimpleCoffee();
    myCoffee = new MilkDecorator(myCoffee);
    myCoffee = new SugarDecorator(myCoffee);
    myCoffee = new CreamDecorator(myCoffee);

    assert.equal(myCoffee.description(), 'Simple coffee, with milk, with sugar, with cream', 'Description should correctly reflect all added decorators');
    assert.equal(myCoffee.cost(), 8.0, 'Cost should be 8.0 after adding milk, sugar, and cream');
  });

  it('should ensure the order of decorators does not affect the final result', () => {
    let myCoffee1: Coffe = new SimpleCoffee();
    myCoffee1 = new MilkDecorator(myCoffee1);
    myCoffee1 = new SugarDecorator(myCoffee1);
    myCoffee1 = new CreamDecorator(myCoffee1);

    let myCoffee2: Coffe = new SimpleCoffee();
    myCoffee2 = new SugarDecorator(myCoffee2);
    myCoffee2 = new MilkDecorator(myCoffee2);
    myCoffee2 = new CreamDecorator(myCoffee2);

    assert.equal(myCoffee1.description(), myCoffee2.description(), 'Descriptions should match regardless of decorator order');
    assert.equal(myCoffee1.cost(), myCoffee2.cost(), 'Costs should match regardless of decorator order');
  });
});

// src/tests/coffee.test.ts
import { Espresso } from '../src/models/Espresso';
import { Latte } from '../src/models/Latte';
import { Cappuccino } from '../src/models/Cappuccino';
import { DiscountVisitor } from '../src/visitors/DiscountVisitor';
import { CalorieVisitor } from '../src/visitors/CalorieVisitor';

describe('Coffee Visitor Pattern', () => {
  it('should apply correct discount to Espresso', () => {
    const espresso = new Espresso();
    const discountVisitor = new DiscountVisitor();
    
    const expectedPriceAfterDiscount = espresso.cost() * 0.9;
    console.log = (msg: string) => {
      assert.equal(msg, `Espresso cost after discount: ${expectedPriceAfterDiscount}`);
    };
    espresso.accept(discountVisitor);
  });

  it('should apply correct discount to Latte', () => {
    const latte = new Latte();
    const discountVisitor = new DiscountVisitor();
    
    const expectedPriceAfterDiscount = latte.cost() * 0.85;
    console.log = (msg: string) => {
      assert.equal(msg, `Latte cost after discount: ${expectedPriceAfterDiscount}`);
    };
    latte.accept(discountVisitor);
  });

  it('should apply correct discount to Cappuccino', () => {
    const cappuccino = new Cappuccino();
    const discountVisitor = new DiscountVisitor();
    
    const expectedPriceAfterDiscount = cappuccino.cost() * 0.8;
    console.log = (msg: string) => {
      assert.equal(msg, `Cappuccino cost after discount: ${expectedPriceAfterDiscount}`);
    };
    cappuccino.accept(discountVisitor);
  });

  it('should calculate calories for Espresso', () => {
    const espresso = new Espresso();
    const calorieVisitor = new CalorieVisitor();

    console.log = (msg: string) => {
      assert.equal(msg, `Espresso has ${espresso.calories()} calories`);
    };
    espresso.accept(calorieVisitor);
  });

  it('should calculate calories for Latte', () => {
    const latte = new Latte();
    const calorieVisitor = new CalorieVisitor();

    console.log = (msg: string) => {
      assert.equal(msg, `Latte has ${latte.calories()} calories`);
    };
    latte.accept(calorieVisitor);
  });

  it('should calculate calories for Cappuccino', () => {
    const cappuccino = new Cappuccino();
    const calorieVisitor = new CalorieVisitor();

    console.log = (msg: string) => {
      assert.equal(msg, `Cappuccino has ${cappuccino.calories()} calories`);
    };
    cappuccino.accept(calorieVisitor);
  });

  it('should apply both visitors in sequence without issues', () => {
    const espresso = new Espresso();
    const latte = new Latte();
    const cappuccino = new Cappuccino();
    const discountVisitor = new DiscountVisitor();
    const calorieVisitor = new CalorieVisitor();

    espresso.accept(discountVisitor);
    espresso.accept(calorieVisitor);

    latte.accept(discountVisitor);
    latte.accept(calorieVisitor);

    cappuccino.accept(discountVisitor);
    cappuccino.accept(calorieVisitor);
  });
});
