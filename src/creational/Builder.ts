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

export class PizzaBuilder {
  slices: number;
  sauce: boolean;
  cheese: boolean;
  pepperoni: boolean;
  veggies: Array<'peppers' | 'onions' | 'olives'>;

  constructor(slices: number) {
    this.slices = slices;
    this.sauce = false;
    this.cheese = false;
    this.pepperoni = false;
    this.veggies = [];
  }

  public addSauce(): PizzaBuilder {
    this.sauce = true;
    return this;
  }

  public addCheese(): PizzaBuilder {
    this.cheese = true;
    return this;
  }

  public addPepperoni(): PizzaBuilder {
    this.pepperoni = true;
    return this;
  }

  public addVeggies(veggies: Array<'peppers' | 'onions' | 'olives'>): PizzaBuilder {
    this.veggies = veggies;
    return this;
  }

  public make(): Pizza {
    return new Pizza(this);
  }
}
