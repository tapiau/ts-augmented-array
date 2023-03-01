export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        subtract<T>(array: ReadonlyArray<T>): Array<T>;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        subtract<T>(array: ReadonlyArray<T>): Array<T>;
    }
}

if (!Array.prototype.subtract) {
    Array.prototype.subtract = function subtract<T>(array: Array<any>): Array<any> {
        return this.filter(x => !array.includes(x));
    };
}
