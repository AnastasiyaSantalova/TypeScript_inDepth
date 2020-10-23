import { ReferenceItem } from '../classes';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
  private _copies: number;

  get copies(): number {
    return this._copies;
  }

  @positiveInteger
  set copies(value: number) {
    this._copies = value;
  }

  constructor(newTitle: string, newYear: number, public edition: number) {
    super(newTitle, newYear);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year}).`);
  }
}
