import { CoffeeMaker } from '../src/CoffeeMaker';
import { EspressoStrategy } from '../src/EspressoStrategy';
import { FrenchPressStrategy } from '../src/FrenchPressStrategy';
import { PourOverStrategy } from '../src/PourOverStrategy';
import * as assert from 'assert';

describe('CoffeeMaker', () => {
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
