declare global {
    interface Array<T> {
        combine(array): object;
        diff(array): Array<T>;
        indexByKey(field): object;
        intersect(array): Array<T>;
        pluck(field): Array<T>;
        subtract(array): Array<T>;
    }
}

declare global {
    interface ArrayConstructor {
        range(begin, end?): number[];
    }
}

Array.prototype.combine = function(array: Array<any>): object {
    return this.reduce((result, field, index) => ({...result, [field]: array[index]}), {});
};

Array.prototype.diff = function(array: Array<any>): Array<any> {
    return this.subtract(array)
        .concat(array.subtract(this))
    ;
};

Array.prototype.intersect = function(array: Array<any>): Array<any> {
    return this
        .filter(element => array.includes(element))
    ;
};

Array.prototype.pluck = function(field: string): Array<any> {
    return this.map((item) => item[field]);
};

Array.prototype.subtract = function(array: Array<any>): Array<any> {
    return this.filter(x => !array.includes(x));
};

Array.prototype.indexByKey = function(field: string): object {
    return this.reduce((prev, curr) => ({ ...prev, [curr[field]]: curr }), {});
};

Array.range = (begin: number, end = 0): number[] => Array.from(
        Array(
            (end >= begin)
            ? end - begin + 1
            : begin
        )
        .keys()
    )
    .map(x => x + ( (end >= begin) ? begin : 0) )
;

export {};
