export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        combine<T>(array: ReadonlyArray<T>): object;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        combine<T>(array: ReadonlyArray<T>): object;
    }
}

if (!Array.prototype.combine) {
    Array.prototype.combine = function combine<T>(array: Array<T>): object {
        return this.reduce((result, field, index) => ({...result, [field]: array[index]}), {});
    };
}
