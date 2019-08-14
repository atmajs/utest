import { is_NODE, is_DOM } from 'atma-utils'
import { xhr_isBusy, xhr_createListener } from './xhr';
import { global } from '../vars'

export function transport_isBusy() {
    if (is_NODE) {
        return false;
    }
    if (is_DOM) {
        return xhr_isBusy(global) || dom_isReady(global) === false;
    }

    return false;
};


if (is_DOM) {
    //= private
    //= Initialize
    xhr_createListener(global);
}



function dom_isReady(win) {
    if (frame_isReady(win) === false)
        return false;

    var i = win.frames.length;
    while (--i > -1) {
        if (frame_isReady(win.frames[i]) === false)
            return false;
    }
    return true;
}

function frame_isReady(frame) {
    try {
        // `readyState` fallback
        if ('__utest_isLoading' in frame)
            return frame.__utest_isLoading === false;

        return (frame.document || frame.contentDocument).readyState === 'complete';
    } catch (error) {
        // cross-origin ?
        return false;
    }
}