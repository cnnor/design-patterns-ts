import { ICommand, Television } from '.';

export class TurnOnCommand implements ICommand {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.turnOn();
  }
}

export class TurnOffCommand implements ICommand {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.turnOff();
  }
}

export class VolumeUpCommand implements ICommand {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.volumeUp();
  }
}

export class VolumeDownCommand implements ICommand {
  constructor(private television: Television) {
    this.television = television;
  }

  execute(): void {
    this.television.volumeDown();
  }
}
