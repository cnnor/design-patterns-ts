import { Context, ReverseStrategy, CamelCaseStrategy, CapitalizeStrategy } from '../Strategy';

test('reverse strategy', () => {
  const context = new Context(new ReverseStrategy());
  expect(context.executeStrategy('design patterns')).toBe('snrettap ngised');
});

test('camel case strategy', () => {
  const context = new Context(new CamelCaseStrategy());
  expect(context.executeStrategy('design patterns')).toBe('designPatterns');
});

test('capitalize strategy', () => {
  const context = new Context(new CapitalizeStrategy());
  expect(context.executeStrategy('design patterns')).toBe('Design Patterns');
});

test('set strategy', () => {
  const context = new Context(new ReverseStrategy());
  expect(context.executeStrategy('design patterns')).toBe('snrettap ngised');
  context.setStrategy(new CamelCaseStrategy());
  expect(context.executeStrategy('design patterns')).toBe('designPatterns');
});
