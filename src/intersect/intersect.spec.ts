import 'mocha';
import {expect} from 'chai';
import '.';

const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const intersect = [3, 4];

describe('Array extension functions', () => {
    it('intersection', () => {
        expect(a.intersect(b)).to.deep.equal(intersect);
    });
});

