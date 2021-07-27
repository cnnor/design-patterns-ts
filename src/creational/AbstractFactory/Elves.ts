import { Archer, Warrior, Mage, ArmyFactory } from '.';

export class ElfArcher implements Archer {
  description: string;

  constructor() {
    this.description = 'An archer of the elf species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class ElfWarrior implements Warrior {
  description: string;

  constructor() {
    this.description = 'A warrior of the elf species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class ElfMage implements Mage {
  description: string;

  constructor() {
    this.description = 'A mage of the elf species.';
  }

  getDescription(): string {
    return this.description;
  }
}

export class ElfArmyFactory implements ArmyFactory {
  createArcher(): ElfArcher {
    return new ElfArcher();
  }

  createWarrior(): ElfWarrior {
    return new ElfWarrior();
  }

  createMage(): ElfMage {
    return new ElfMage();
  }
}
