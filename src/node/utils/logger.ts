import { logger } from '../../vars';
import { Color } from '../../utils/color';



let diff = null;

(console as any).print = function (...args) {
    var message = args.join(' ');

    process.stdout.write(message);
};

export function log_clearStd() {
    process.stdout.write('\u001b[2J');//'\033[2J');
    process.stdout.write('\u001bc');//'\033c');
};

export function log_stringDiff(a, b) {
    if (diff == null) {
        diff = require('diff');
    }

    let str = diff
        .diffWordsWithSpace(a, b)
        .map(function (x) {
            var val = x.value;
            if (x.added || x.removed) {
                if (/^[ ]*$/.test(val)) {
                    val = val[x.added ? 'bg_green' : 'bg_red'];
                }
                else if (/^\s*$/.test(val)) {
                    val = val
                        .split('')
                        .map(function (x) {
                            var code = x.charCodeAt(0);
                            if (code === 13) {
                                return '\\r\r';
                            }
                            if (code === 10) {
                                return '\\n\n';
                            }
                            if (x === ' ') {
                                return x[x.added ? 'bg_green' : 'bg_red'];
                            }
                            return Color.bg_cyan(`[${code}]`);
                        })
                        .join('');

                }
            }
            if (x.added)
                return val.green;
            if (x.removed)
                return val.red;

            return val;
        })
        .join('');

    logger.log(str);

};
