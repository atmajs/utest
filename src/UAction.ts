import { UTest } from './UTest'
import { process_toggle } from './utils/process';

export class UAction extends UTest {

    constructor (mix: string | any, suite?: any, parent?) {

        let $suite = typeof mix === 'string' ? suite : mix;
        if ($suite != null && typeof $suite !== 'function') {
            if ($suite.$config == null || $suite.$config.timeout == null) {
                if ($suite.$config == null) {
                    $suite.$config = {};
                }
                $suite.$config.timeout = Number.MAX_VALUE;
            }
        }

        super(mix, suite, parent);
    }


    static spawn (command: string) {

    }
    static getCurrent () {

    }
}


export class Action {
    
    constructor (public command: string) {

    }

    spawn () {
        throw new Error('Not Implemented');
        //process_toggle()
    }

    getLogs ()  {
        throw new Error('Not Implemented');
    }
}