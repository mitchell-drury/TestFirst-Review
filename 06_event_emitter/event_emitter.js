function MyEventEmitter () {
    this.events = {};
}

MyEventEmitter.prototype.addListener = function (eventName, func) {
    if (this.events.hasOwnProperty(eventName)){
        this.events[eventName].push(func);
    } else {
        this.events[eventName] = [func];
    }
};

MyEventEmitter.prototype.emit = function (... args) {
    for (let i = 0; i < this.events[args[0]].length; i++){
        this.events[args[0]][i].apply(null, args[i+1]);
    }
};