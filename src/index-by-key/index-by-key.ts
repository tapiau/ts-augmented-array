export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        indexByKey<T>(field: string): object;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        indexByKey<T>(field: string): object;
    }
}

if (!Array.prototype.indexByKey) {
    Array.prototype.indexByKey = function indexByKey<T>(field: string): object {
        return this.reduce((prev, curr) => ({...prev, [curr[field]]: curr}), {});
    };
}
