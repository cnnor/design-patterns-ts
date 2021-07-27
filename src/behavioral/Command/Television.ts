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
