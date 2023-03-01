import 'mocha';
import {expect} from 'chai';
import '.';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const diff = [1, 2, 5, 6];

describe('Array extension functions', () => {
    it('diff', () => {
        expect(a.diff(b)).to.deep.equal(diff);
    });
});
