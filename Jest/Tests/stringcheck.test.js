const stringcheck = require('./stringcheck')

describe('isEmpty', ()=> {

    test(`isEmpty('')`, ()=>{
        expect(stringcheck.isEmpty(' ')).toBe(true);
    })
    
    test(`isEmpty(' ')`, ()=>{
        expect(stringcheck.isEmpty(' ')).toBe(true);
    })

    test(`isEmpty('100')`, ()=>{
        expect(stringcheck.isEmpty('100')).toBe(false);
    })
    
    test(`isEmpty(' hk96')`, ()=>{
        expect(stringcheck.isEmpty(' hk96')).toBe(false);
        
    })
    test(`isEmpty('hk96 ')`, ()=>{
        expect(stringcheck.isEmpty('hk96 ')).toBe(false);
        
    })
    test(`isEmpty(' hk96 ')`, ()=>{
        expect(stringcheck.isEmpty(' hk96 ')).toBe(false);
        
    })
})
