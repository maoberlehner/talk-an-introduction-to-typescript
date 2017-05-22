import { IEngine } from '../interfaces/IEngine';

export class GasolineEngine implements IEngine {
  constructor(public kw: number) { }

  public start() {
    console.log(`A ${this.kw}kw gasoline engine makes: Brum Brum`);
  }
}
