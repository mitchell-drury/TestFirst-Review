function search(func) {
    let found = false;
    for (let i = 0; i < this.length; i++){
        if (Array.isArray(this[i])) {
            found = search.call(this[i], func);
        } else if (func(this[i])) {
            found = true;
        }
        if (found){
            break;
        }
    }
    return found;
}