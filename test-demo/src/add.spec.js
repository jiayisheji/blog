import add from './add';

describe('第一个测试套件', function() {
    it('第一个测试用例: 1+1 === 2', function() {
        expect(1 + 1).toBe(2);
    });
    it('第二个测试用例: 1+1 === 2', function() {
        expect(1 + 1).toBe(2);
    });
});

describe('第二个测试套件', function() {
    it('第一个测试用例: 1+1 === 2', function() {
        expect(add(1, 1)).toBe(2);
    });
    it('第二个测试用例: 1+1 === 2', function() {
        expect(add()).toBe(0);
    });
    it('第二个测试用例: 1+1 === 2', function() {
        expect(add(1)).toBe(1);
    });
    it('第二个测试用例: 1+1 === 2', function() {
        expect(add(undefined, 1)).toBe(2);
    });
});
