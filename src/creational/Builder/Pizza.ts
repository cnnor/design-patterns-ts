import type { PizzaBuilder } from '.';

export class Pizza {
  slices: number;
  pepperoni: boolean;
  cheese: boolean;
  sauce: boolean;
  veggies: Array<'peppers' | 'onions' | 'olives'>;

  constructor(builder: PizzaBuilder) {
    this.slices = builder.slices;
    this.sauce = builder.sauce;
    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.veggies = builder.veggies;
  }
}
