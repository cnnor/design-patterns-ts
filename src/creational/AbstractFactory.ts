// Class Interfaces
export interface Archer {
  description: string;
  getDescription: () => string;
}

export interface Warrior {
  description: string;
  getDescription: () => string;
}

export interface Mage {
  description: string;
  getDescription: () => string;
}

// Human Implementations
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

// Elven Implementations
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

// Factories
export interface TeamFactory {
  createArcher: () => Archer;
  createWarrior: () => Warrior;
  createMage: () => Mage;
}

export class HumanTeamFactory implements TeamFactory {
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

export class ElfTeamFactory implements TeamFactory {
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

export enum TeamType {
  HUMAN,
  ELF,
}

export class FactoryMaker {
  static makeFactory(type: TeamType): TeamFactory {
    switch (type) {
      case TeamType.HUMAN:
        return new HumanTeamFactory();
      case TeamType.ELF:
        return new ElfTeamFactory();
      default:
        throw new Error('Invalid team type.');
    }
  }
}
