import Gimbal from '../gimbal.js';

export default class G120 extends Gimbal {
    constructor() {
        super(2, 0.175 * 6, 0.15);
    }
}
