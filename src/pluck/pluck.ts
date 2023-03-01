export {};

declare global {
    interface ReadonlyArray<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        pluck<T>(field: string): Array<T>;
    }
    interface Array<T> {
        /**
         * @returns object with keys from the first array and values from the second array
         */
        pluck<T>(field: string): Array<T>;
    }
}

if (!Array.prototype.pluck) {
    Array.prototype.pluck = function pluck<T>(field: string): Array<T> {
        return this.map((item) => item[field]);
    };
}
