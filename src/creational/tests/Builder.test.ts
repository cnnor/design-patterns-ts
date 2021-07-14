import { PizzaBuilder } from '../Builder';

test('make a yummy pepperoni and cheese pizza', () => {
  const yummyPiza = new PizzaBuilder(12).addSauce().addCheese().addPepperoni().make();
  const expected = { slices: 12, sauce: true, cheese: true, pepperoni: true, veggies: [] };
  expect(yummyPiza).toMatchObject(expected);
});

test('make a not-so-yumm pizza with onions', () => {
  const notSoYummyPizza = new PizzaBuilder(12).addSauce().addCheese().addVeggies(['onions']).make();
  const expected = { slices: 12, sauce: true, cheese: true, pepperoni: false, veggies: ['onions'] };
  expect(notSoYummyPizza).toMatchObject(expected);
});
