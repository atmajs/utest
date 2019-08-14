export function fn_waterfall (...fns: Function[]){
    var done = fns.pop(),
        imax = fns.length,
        i = -1;
        
    function next(){
        if (++i > imax - 1) 
            return done();
        
        fns[i](next);
    }
    next();
};
