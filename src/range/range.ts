export {};

declare global {
    interface ArrayConstructor {
        range(begin: number, end?: number): number[];
    }
}

if (!Array.range) {
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
}
