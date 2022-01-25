declare global {
    interface Array<T> {
        diff(array): Array<T>;
        indexByKey(field): object;
        intersect(array): Array<T>;
        pluck(field): Array<T>;
        subtract(array): Array<T>;
        range(begin, end): Array<T>;
    }
}

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

Array.prototype.indexByKey = function(field) {
    return this.reduce((prev, curr) => ({ ...prev, [curr[field]]: curr }), {});
};

export function range(begin: number, end = 0): number[]
{
    return (
        Array.from(
            Array(
                (end >= begin)
                ? end - begin + 1
                : begin
            )
            .keys()
        )
        .map(x => x + ( (end >= begin) ? begin : 0) )
    );

    // return Array.from(Array((end - begin + 1)).keys()).map(x => x + begin);
}

export {};
