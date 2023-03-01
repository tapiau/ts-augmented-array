import 'mocha';
import {expect} from 'chai';
import '.';

const keyList = ['a', 'b'];
const valueList = ['a1', 'b1'];
const combined = { a: 'a1', b: 'b1'};

describe('Array extension functions', () => {
    it('combine', () => {
        expect(keyList.combine(valueList)).to.deep.equal(combined);
    });
});

