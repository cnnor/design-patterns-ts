export interface Command {
  execute: () => void;
}

export class TurnOnCommand implements Command {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.turnOn();
  }
}

export class TurnOffCommand implements Command {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.turnOff();
  }
}

export class VolumeUpCommand implements Command {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.volumeUp();
  }
}

export class VolumeDowncommand implements Command {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.volumeDown();
  }
}

export class Remote {
  private buttons: Command[];

  constructor(private television: Television) {
    this.television = television;
    this.buttons = [
      new TurnOnCommand(this.television),
      new TurnOffCommand(this.television),
      new VolumeUpCommand(this.television),
      new VolumeDowncommand(this.television),
    ];
  }

  pressButton(slot: number): void {
    if (slot >= this.buttons.length || slot < 0)
      throw new Error('That is not a valid button slot.');

    this.buttons[slot].execute();
  }
}

export class Television {
  #on = false;
  #volume = 50;

  get on(): boolean {
    return this.#on;
  }

  get volume(): number {
    return this.#volume;
  }

  turnOn(): void {
    this.#on = true;
  }

  turnOff(): void {
    this.#on = false;
  }

  volumeUp(): void {
    this.#volume = this.#volume + 10;
  }

  volumeDown(): void {
    this.#volume = this.#volume - 10;
  }
}
