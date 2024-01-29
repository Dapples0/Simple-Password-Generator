import { passwordGenTest } from './generatorExp';

describe('Password Generation', () => {
    test('Length less than 8', () => {
        const res = passwordGenTest(6, true, true, true);
        expect(res).toStrictEqual({ error: expect.any(String) }); 
    });
    test('Length greater than 128', () => {
        const res = passwordGenTest(129, true, true, true);
        expect(res).toStrictEqual({ error: expect.any(String) }); 
    });
    test('Only lower case letters', () => {
        const res = passwordGenTest(12, false, false, false);
        const regex = /^[a-z]+$/;
        expect(regex.test(res)).toStrictEqual(true); 
    });
    test('Include upper case letters', () => {
        const res = passwordGenTest(10, false, true, false);
        const regex = /^[a-zA-z]+$/;
        expect(regex.test(res)).toStrictEqual(true); 
    });
    test('Include two traits', () => {
        let res = passwordGenTest(17, false, true, true);
        let regex = /^[a-zA-Z0-9]*$/;
        expect(regex.test(res)).toStrictEqual(true); 

        res = passwordGenTest(12, true, true, false);
        regex = /^[a-zA-z~`!@#$%^*(),./=?+_-]+$/;
        console.log(res)
        expect(regex.test(res)).toStrictEqual(true); 
        
        res = passwordGenTest(18, true, false, true);
        regex = /^[a-z0-9~`!@#$%^*(),./=?+_-]+$/;
        expect(regex.test(res)).toStrictEqual(true); 
    });

    test('All traits', () => {
        const res = passwordGenTest(53, true, true, true);
        const regex = /^[a-zA-Z0-9~`!@#$%^*(),./=?+_-]+$/;
        expect(regex.test(res)).toStrictEqual(true); 
    })
})