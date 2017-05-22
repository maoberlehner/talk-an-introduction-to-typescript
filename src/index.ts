type MotorStart = () => void;

interface IEngine {
  kw: number;
  start: MotorStart;
}

interface ICar {
  start: MotorStart;
}

class ElectroEngine implements IEngine {
  constructor(public kw: number) { }

  public start() {
    console.log(`A ${this.kw}kw electro engine makes: Fip Fip`);
  }
}

class GasolineEngine implements IEngine {
  constructor(public kw: number) { }

  public start() {
    console.log(`A ${this.kw}kw gasoline engine makes: Brum Brum`);
  }
}

class Car implements ICar {
  constructor(private engine: IEngine) { }

  public start() {
    this.engine.start();
  }
}

const electroEngine = new ElectroEngine(100);
const electroCar = new Car(electroEngine);
electroCar.start();

const gasolineEngine = new GasolineEngine(250);
const gasolineCar = new Car(gasolineEngine);
gasolineCar.start();
