import { IEngine } from '../interfaces/IEngine';

export class ElectroEngine implements IEngine {
  constructor(public kw: number) { }

  public start() {
    // tslint:disable-next-line
    console.log(`A ${this.kw}kw electro engine makes: Fip Fip`);
  }
}
