declare global {
    interface Array<T> {
        intersect(array): Array<T>;
        subtract(array): Array<T>;
        diff(array): Array<T>;
    }
}
Array.prototype.intersect = function(array) {
    return this.filter(element => array.includes(element));
};

Array.prototype.subtract = function(array) {
    return this.filter(x => !array.includes(x));
}

Array.prototype.diff = function(array) {
    return this.subtract(array)
        .concat(array.subtract(this))
    ;
}

export {};
