function sometimes (func) {
    let counter = 3;
    return function (a,b) {
        if (counter > 0){
            counter -= 1;
            return func.apply(null, [a,b]);
        } else {
            counter += 1;
            return "I do not know!";
        }
    }
}