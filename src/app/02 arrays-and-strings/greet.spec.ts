import{greet}from'./greet';
describe('greet',()=>{
    it('should contain text name called mosh',()=>{
        expect(greet('mosh')).toContain('mosh');
    })
})