import { is_Array } from 'atma-utils'

export function arr_isEmpty(array) {
    if (is_Array(array) === false)
        return true;

    return array.length === 0;
};

export function arr_distinctConcat(a, b) {
    if (b == null)
        return a;
    if (a == null)
        return b;

    var arr = a.concat(b);
    var out = [], hash = {};
    arr.forEach(function (x) {
        if (hash[x] === true) {
            return;
        }
        hash[x] = true;
        out.push(x);
    });
    return out;
}
