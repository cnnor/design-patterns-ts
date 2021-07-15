import { President } from '../Singleton';

test('returns a single president instance', () => {
  const constructor = President.getInstance();
  const instance = President.getInstance();
  expect(constructor).toBe(instance);
});
