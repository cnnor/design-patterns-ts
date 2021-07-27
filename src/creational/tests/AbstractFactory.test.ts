import {
  FactoryMaker,
  HumanArcher,
  HumanMage,
  HumanArmyFactory,
  HumanWarrior,
  ArmyType,
} from '../AbstractFactory';

test('factory maker returns a human team factory', () => {
  const humanFactory = FactoryMaker.makeFactory(ArmyType.HUMAN);
  expect(humanFactory).toBeInstanceOf(HumanArmyFactory);
});

test('human factory returns a human team', () => {
  const humanFactory = FactoryMaker.makeFactory(ArmyType.HUMAN);
  const archer = humanFactory.createArcher();
  const warrior = humanFactory.createWarrior();
  const mage = humanFactory.createMage();
  const team = { archer, warrior, mage };

  expect(team).toMatchObject({
    archer: new HumanArcher(),
    warrior: new HumanWarrior(),
    mage: new HumanMage(),
  });
});

test('humans return description', () => {
  const humanFactory = FactoryMaker.makeFactory(ArmyType.HUMAN);
  const archer = humanFactory.createArcher();
  const warrior = humanFactory.createWarrior();
  const mage = humanFactory.createMage();

  expect(archer.getDescription()).toBe('An archer of the human species.');
  expect(warrior.getDescription()).toBe('A warrior of the human species.');
  expect(mage.getDescription()).toBe('A mage of the human species.');
});
