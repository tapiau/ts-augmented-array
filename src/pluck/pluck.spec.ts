import 'mocha';
import {expect} from 'chai';
import './index';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const dictOfObjects = {
    a1: {a: 1, b: 3, i: 'a1'},
    a2: {a: 2, b: 4, i: 'a2'},
    a3: {a: 3, b: 5, i: 'a3'},
    a4: {a: 4, b: 6, i: 'a4'},
};
const arrayOfObjects = Object.values(dictOfObjects);


describe('Array extension functions', () => {
    it('pluck', () => {
        expect(arrayOfObjects.pluck('a')).to.deep.equal(a);
        expect(arrayOfObjects.pluck('b')).to.deep.equal(b);
    });
});

