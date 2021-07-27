import { Archer, Warrior, Mage, ArmyFactory } from '.';

export class HumanArcher implements Archer {
  description: string;

  constructor() {
    this.description = 'An archer of the human species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class HumanWarrior implements Warrior {
  description: string;

  constructor() {
    this.description = 'A warrior of the human species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class HumanMage implements Mage {
  description: string;

  constructor() {
    this.description = 'A mage of the human species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class HumanArmyFactory implements ArmyFactory {
  createArcher(): HumanArcher {
    return new HumanArcher();
  }

  createWarrior(): HumanWarrior {
    return new HumanWarrior();
  }

  createMage(): HumanMage {
    return new HumanMage();
  }
}
