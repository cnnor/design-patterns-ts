export interface Strategy {
  execute: (str: string) => string;
}

export class ReverseStrategy implements Strategy {
  execute(str: string): string {
    return [...str].reverse().join('');
  }
}

export class CamelCaseStrategy implements Strategy {
  execute(str: string): string {
    return str
      .replace(/\s(.)/g, (s) => {
        return s.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, (s) => {
        return s.toLowerCase();
      });
  }
}

export class CapitalizeStrategy implements Strategy {
  execute(str: string): string {
    return str
      .toLowerCase()
      .split(' ')
      .map((s) => {
        return s[0].toUpperCase() + s.substr(1);
      })
      .join(' ');
  }
}

export class Context {
  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): Context {
    this.strategy = strategy;
    return this;
  }

  executeStrategy(str: string): string {
    return this.strategy.execute(str);
  }
}
