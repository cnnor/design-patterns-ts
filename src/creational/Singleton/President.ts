export class President {
  static instance: President | undefined;
  public name: string;

  constructor() {
    this.name = 'Bob';
  }

  public static getInstance(): President {
    if (this.instance === undefined) this.instance = new President();
    return this.instance;
  }
}
