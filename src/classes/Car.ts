import { ICar } from '../interfaces/ICar';
import { IEngine } from '../interfaces/IEngine';

export class Car implements ICar {
  constructor(private engine: IEngine) { }

  public start() {
    this.engine.start();
  }
}
