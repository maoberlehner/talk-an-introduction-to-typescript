import { Car } from './classes/Car';
import { ElectroEngine } from './classes/ElectroEngine';
import { GasolineEngine } from './classes/GasolineEngine';

const electroEngine = new ElectroEngine(100);
const electroCar = new Car(electroEngine);
electroCar.start();

const gasolineEngine = new GasolineEngine(250);
const gasolineCar = new Car(gasolineEngine);
gasolineCar.start();
