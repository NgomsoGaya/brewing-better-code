// src/Coffee.ts
export class Coffee {
    public type: string;
    public size: string;
    public sugar: number;
    public milk: boolean;

    constructor() {
        this.type = '';
        this.size = '';
        this.sugar = 0;
        this.milk = false;
    }
}