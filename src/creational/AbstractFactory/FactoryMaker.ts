import { ArmyFactory, HumanArmyFactory, ElfArmyFactory } from '.';

export enum ArmyType {
  HUMAN,
  ELF,
}

export class FactoryMaker {
  static makeFactory(type: ArmyType): ArmyFactory {
    switch (type) {
      case ArmyType.HUMAN:
        return new HumanArmyFactory();
      case ArmyType.ELF:
        return new ElfArmyFactory();
      default:
        throw new Error('Invalid army type.');
    }
  }
}
