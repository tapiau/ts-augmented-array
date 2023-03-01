export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        intersect<T>(array: ReadonlyArray<T>): Array<T>;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        intersect<T>(array: ReadonlyArray<T>): Array<T>;
    }
}

if (!Array.prototype.intersect) {
    Array.prototype.intersect = function intersect<T>(array: Array<any>): Array<any> {
        return this
            .filter(element => array.includes(element))
        ;
    };
}
