import Gimbal from '../gimbal.js';

export default class G240 extends Gimbal {
    constructor() {
        super(4, 0.175 * 12, 0.16);
    }
}
