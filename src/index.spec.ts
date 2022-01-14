import 'mocha';
import {expect} from 'chai';
import './index';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const intersect = [3, 4];
const subtractA = [5, 6];
const subtractB = [1, 2];
const diff = [1, 2, 5, 6];
const arrayOfObjects = [
    {a: 1, b: 3},
    {a: 2, b: 4},
    {a: 3, b: 5},
    {a: 4, b: 6},
];

describe('Array extension functions', () => {
    before(() => {
    });
    it('intersection', () => {
        expect(a.intersect(b)).to.deep.equal(intersect);
    });
    it('A subtract B', () => {
        expect(a.subtract(b)).to.deep.equal(subtractB);
    });
    it('B subtract A', () => {
        expect(b.subtract(a)).to.deep.equal(subtractA);
    });
    it('diff', () => {
        expect(a.diff(b)).to.deep.equal(diff);
    });
    it('pluck', () => {
        expect(arrayOfObjects.pluck('a')).to.deep.equal(a);
        expect(arrayOfObjects.pluck('b')).to.deep.equal(b);
    });
});
