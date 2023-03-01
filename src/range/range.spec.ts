import 'mocha';
import {expect} from 'chai';
import './index';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

describe('Array extension functions', () => {
    it('generates range of numbers', () => {
        expect(Array.range(4)).to.deep.equal(a.map(x => x - 1));
        expect(Array.range(3, 6)).to.deep.equal(b);
    });
});
