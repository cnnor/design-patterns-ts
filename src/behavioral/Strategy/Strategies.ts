import { IStrategy } from '.';

export class ReverseStrategy implements IStrategy {
  execute(str: string): string {
    return [...str].reverse().join('');
  }
}

export class CamelCaseStrategy implements IStrategy {
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

export class CapitalizeStrategy implements IStrategy {
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
