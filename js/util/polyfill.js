// IE does not support Number.isNaN
Number.isNaN = Number.isNaN || function(value) {     
    return value !== value;
};
