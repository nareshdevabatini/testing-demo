import {getCurrencies} from './getCurrencies';

describe('getCurrencies',()=>{
    it('should contain currencies',()=>{
        expect(getCurrencies()).toContain('usd');
        expect(getCurrencies()).toContain('aud');
        expect(getCurrencies()).toContain('eur');
    })
})