import '../subtract/subtract';

export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        diff<T>(array: ReadonlyArray<T>): Array<T>;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        diff<T>(array: ReadonlyArray<T>): Array<T>;
    }
}

if (!Array.prototype.diff) {
    Array.prototype.diff = function diff<T>(array: Array<any>): Array<any> {
        return this.subtract(array)
            .concat(array.subtract(this))
        ;
    };
}
