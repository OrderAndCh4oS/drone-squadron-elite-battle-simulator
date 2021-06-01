import Gimbal from '../gimbal.js';

export default class G90 extends Gimbal {
    constructor() {
        super(1, 0.175 * 4.5, 0.14);
    }
}
