import Drone from '../game-object/drone.js';
import { dm, height, width } from '../constants/constants.js';

export default class DroneFactory {
    static make(droneData, squadronData) {
        const drone = new Drone(
            droneData,
            squadronData,
            Math.random() * width,
            Math.random() * height,
            Math.random() * Math.PI * 2,
        );
        dm.addDrone(drone);
        return drone;
    }
}
