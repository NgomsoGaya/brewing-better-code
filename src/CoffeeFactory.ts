// CoffeeFactory.ts
class CoffeeFactory {
    private static instance: CoffeeFactory;
  
    // Private constructor to prevent instantiation
    private constructor() {}
  
    // Method to get the singleton instance
    public static getInstance(): CoffeeFactory {
      if (!CoffeeFactory.instance) {
        CoffeeFactory.instance = new CoffeeFactory();
      }
      return CoffeeFactory.instance;
    }
  
    // Example method to simulate brewing coffee
    public brewCoffee(type: string): string {
      return `Brewing a cup of ${type}`;
    }
  }
  
  export default CoffeeFactory;