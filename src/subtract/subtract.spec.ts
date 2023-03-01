import 'mocha';
import {expect} from 'chai';
import '.';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const subtractA = [5, 6];
const subtractB = [1, 2];

describe('Array extension functions', () => {
    it('subtract', () => {
        expect(a.subtract(b)).to.deep.equal(subtractB);
        expect(b.subtract(a)).to.deep.equal(subtractA);
    });
});

