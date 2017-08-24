function rotater (str) {
    let forward = true;
    return function (num) {
        if (num === str.length){
            forward = !forward;
            return str;
        } else if (forward){
            return str.slice(num) + str.slice(0,num);
        } else {
            return str.slice(-num) + str.slice(0,-num);
        }
    }
}