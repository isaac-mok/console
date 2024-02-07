import {debug, error, info, log, warn} from '.';
import {faker} from '@faker-js/faker';

// eslint-disable-next-line no-unused-vars
const generateTests = (func: (...data: any[]) => any) => {
  describe('single', () => {
    describe('primitives', () => {
      it(`returns null`, () => {
        expect(func(null)).toBe(null);
      });
      it(`returns undefined`, () => {
        expect(func(undefined)).toBe(undefined);
      });
      it(`returns boolean`, () => {
        const bool = faker.datatype.boolean();
        expect(func(bool)).toBe(bool);
      });
      it(`returns number`, () => {
        const int = faker.number.int();
        expect(func(int)).toBe(int);
        const float = faker.number.float();
        expect(func(float)).toBe(float);
      });
      it(`returns bigint`, () => {
        const bigInt = faker.number.bigInt();
        expect(func(bigInt)).toBe(bigInt);
      });
      it(`returns string`, () => {
        const sentence = faker.lorem.sentence();
        expect(func(sentence)).toBe(sentence);
      });
      it(`returns symbol`, () => {
        const symbol = Symbol(faker.lorem.word());
        expect(func(symbol)).toBe(symbol);
      });
    });

    describe('objects', () => {
      it(`returns object`, () => {
        const obj = {[faker.lorem.word()]: faker.lorem.word()};
        expect(func(obj)).toBe(obj);
        expect(func(obj)).not.toBe({...obj});
        expect(func(obj)).toStrictEqual({...obj});
      });
      it(`returns date`, () => {
        const date = faker.date.anytime();
        expect(func(date)).toBe(date);
      });
      it(`returns array`, () => {
        const arr = Array(faker.number.int(20)).fill(null).map(() => faker.lorem.word());
        expect(func(arr)).toBe(arr);
        expect(func(arr)).not.toBe([...arr]);
        expect(func(arr)).toStrictEqual([...arr]);
      });
    });
  });

  describe('multiple', () => {
    it('returns array when >1 argument', () => {
      const args = [faker.lorem.word(), faker.number.int(), faker.datatype.boolean()];
      const returned = func(args);
      expect(Array.isArray(returned)).toBe(true);
      args.forEach(arg => expect(returned).toContain(arg));
    });
  });
};

describe('#debug', () => {
  generateTests(debug);
});
describe('#error', () => {
  generateTests(error);
});
describe('#info', () => {
  generateTests(info);
});
describe('#log', () => {
  generateTests(log);
});
describe('#warn', () => {
  generateTests(warn);
});
