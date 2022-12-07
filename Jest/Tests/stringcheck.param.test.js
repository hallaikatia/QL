const stringcheck = require('./stringcheck')

describe('isEmpty', ()=>{
test.each([ ['', true], [' ', true], ['100', false], ['hal96 ', false],[' hal96', false],[' hal96 ', false]])(
    'str %s = %d', (n, expected) => {
        expect(stringcheck.isEmpty(n)).toBe(expected)})
})

describe('isInt', ()=>{
    test.each([['100000', true],['100 000', true], ['0', true], ['-1', true], [' ', false],['hal96', false], [' hal96 ', false]])(
        'str %s = %d', (n,expected) => {
            expect(stringcheck.isInt(n)).toBe(expected)})
})

describe('isSmallPositiveInt', ()=>{
    test.each([['99', true],[' 70', true],['0', true], [' ', false],['hal96 ', false],['-1', false], [' -70', false], ['100', false]])(
        'str %s = %d', (n,expected) => {
      expect(stringcheck.isSmallPositiveInt(n)).toBe(expected)})
})
