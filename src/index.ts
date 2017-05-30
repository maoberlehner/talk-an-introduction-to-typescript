import { Car } from './classes/Car';
import { ElectroEngine } from './classes/ElectroEngine';
import { GasolineEngine } from './classes/GasolineEngine';

const electroEnginePower = 100;
const electroEngine = new ElectroEngine(electroEnginePower);
const electroCar = new Car(electroEngine);
electroCar.start();

const gasolineEnginePower = 250;
const gasolineEngine = new GasolineEngine(gasolineEnginePower);
const gasolineCar = new Car(gasolineEngine);
gasolineCar.start();
