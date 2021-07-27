import { IStrategy } from '.';

export class Context {
  constructor(private strategy: IStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IStrategy): Context {
    this.strategy = strategy;
    return this;
  }

  executeStrategy(str: string): string {
    return this.strategy.execute(str);
  }
}
