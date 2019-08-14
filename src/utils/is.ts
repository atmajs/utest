import { is_Function } from 'atma-utils';


export function is_Deferred (x){
    return x != null
        && typeof x === 'object'
        && is_Function(x.then)
        ;
};
