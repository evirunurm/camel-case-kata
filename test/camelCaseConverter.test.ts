import { CamelCaseConverter } from '../src/camelCaseConverter';

describe('camelCaseConverter', () => {
    it('should return the same string if it has no text', () => {
        expect(CamelCaseConverter('⇒')).toBe('⇒');
    })

    it('should return the same string if capitalized', () => {
        expect(CamelCaseConverter('Foo')).toBe('Foo');
    })

    it('should remove spaces if capitalized and separated by spaces', () => {
        expect(CamelCaseConverter('Foo Bar')).toBe('FooBar');
    })

    it('should return join words if capitalized and separated by hyphens', () => {
        expect(CamelCaseConverter('Foo_Bar-Foo')).toBe('FooBarFoo');
    })

    it('should return a word with the first letter capitalized', () => {
        expect(CamelCaseConverter('foo')).toBe('Foo');
    })

    it('should return words in uppercase and joined if lowercase', () => {
        expect(CamelCaseConverter('foo_bar foo-bar')).toBe('FooBarFooBar');
    })
})