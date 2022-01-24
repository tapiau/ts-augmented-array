import 'mocha';
import {expect} from 'chai';
import './index';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const intersect = [3, 4];
const subtractA = [5, 6];
const subtractB = [1, 2];
const diff = [1, 2, 5, 6];
const dictOfObjects = {
    a1: {a: 1, b: 3, i: 'a1'},
    a2: {a: 2, b: 4, i: 'a2'},
    a3: {a: 3, b: 5, i: 'a3'},
    a4: {a: 4, b: 6, i: 'a4'},
};
const arrayOfObjects = Object.values(dictOfObjects);

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
    it('indexByKey', () => {
        expect(arrayOfObjects.indexByKey('i')).to.deep.equal(dictOfObjects);
    });
});
