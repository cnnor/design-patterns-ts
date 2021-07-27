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

export interface ArmyFactory {
  createArcher: () => Archer;
  createWarrior: () => Warrior;
  createMage: () => Mage;
}
