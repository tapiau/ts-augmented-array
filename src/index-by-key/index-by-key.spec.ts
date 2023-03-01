import 'mocha';
import {expect} from 'chai';
import '.';

const dictOfObjects = {
    a1: {a: 1, b: 3, i: 'a1'},
    a2: {a: 2, b: 4, i: 'a2'},
    a3: {a: 3, b: 5, i: 'a3'},
    a4: {a: 4, b: 6, i: 'a4'},
};
const arrayOfObjects = Object.values(dictOfObjects);

describe('Array extension functions', () => {
    it('indexByKey', () => {
        expect(arrayOfObjects.indexByKey('i')).to.deep.equal(dictOfObjects);
    });
});

