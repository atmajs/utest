export function obj_defaults (target, defaults_, limit){
	if (target == null) 
        target = {};
    
    for(var key in defaults_){
        if (target[key] != null)
            continue;
        if (limit != null && limit.indexOf(key) === -1) 
            continue;
        
        target[key] = defaults_[key];
    }
    return target;
};
