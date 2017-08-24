function accessor (obj) {
    return function (key, value) {
        if (value !== undefined) {
            obj[key] = value;
        } else {
            return obj[key];
        }
    };
}