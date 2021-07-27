import { Television, Remote } from '../Command';

test('initialize television', () => {
  const television = new Television();
  expect(television.on).toBe(false);
  expect(television.volume).toBe(50);
});

test('turn on', () => {
  const television = new Television();
  const remote = new Remote(television);
  remote.pressButton(0);
  expect(television.on).toBe(true);
});

test('turn off', () => {
  const television = new Television();
  const remote = new Remote(television);
  remote.pressButton(1);
  expect(television.on).toBe(false);
});

test('volume up', () => {
  const television = new Television();
  const remote = new Remote(television);
  remote.pressButton(2);
  expect(television.volume).toBe(60);
});

test('volume down', () => {
  const television = new Television();
  const remote = new Remote(television);
  remote.pressButton(3);
  expect(television.volume).toBe(40);
});

test('invalid button', () => {
  const television = new Television();
  const remote = new Remote(television);
  expect(() => {
    remote.pressButton(4);
  }).toThrowError();
});

test('two televisions and two remotes', () => {
  const television1 = new Television();
  const remote1 = new Remote(television1);
  remote1.pressButton(2); // Volume Up

  const television2 = new Television();
  const remote2 = new Remote(television2);
  remote2.pressButton(3); // Volume Down

  expect(television1.volume).toBe(60);
  expect(television2.volume).toBe(40);
});

test('one television and two remotes', () => {
  const television = new Television();
  const remote1 = new Remote(television);
  const remote2 = new Remote(television);
  remote1.pressButton(0); // Turn On
  remote2.pressButton(3); // Volume Down

  expect(television.on).toBe(true);
  expect(television.volume).toBe(40);
});
