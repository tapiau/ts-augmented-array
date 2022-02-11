declare global {
    interface Array<T> {
        combine(array): Array<T>;
        diff(array): Array<T>;
        intersect(array): Array<T>;
        pluck(field): Array<T>;
        subtract(array): Array<T>;
    }
}

Array.prototype.combine = function(array) {
    return this.reduce((result, field, index) => (result[field] = array[index], result), {});
};

Array.prototype.diff = function(array) {
    return this.subtract(array)
        .concat(array.subtract(this))
    ;
};

Array.prototype.intersect = function(array) {
    return this.filter(element => array.includes(element));
};

Array.prototype.pluck = function(field) {
    return this.map((item) => item[field]);
};

Array.prototype.subtract = function(array) {
    return this.filter(x => !array.includes(x));
};

export {};
