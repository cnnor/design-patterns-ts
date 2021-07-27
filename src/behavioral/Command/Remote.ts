import {
  ICommand,
  Television,
  TurnOnCommand,
  TurnOffCommand,
  VolumeUpCommand,
  VolumeDownCommand,
} from '.';

export class Remote {
  private buttons: ICommand[];

  constructor(private television: Television) {
    this.television = television;
    this.buttons = [
      new TurnOnCommand(this.television),
      new TurnOffCommand(this.television),
      new VolumeUpCommand(this.television),
      new VolumeDownCommand(this.television),
    ];
  }

  pressButton(slot: number): void {
    if (slot >= this.buttons.length || slot < 0)
      throw new Error('That is not a valid button slot.');

    this.buttons[slot].execute();
  }
}
