import Validator from '../Validator';

test('Full name requirements', () => {
  const Validator1 = new Validator('f123f');
  expect(Validator1.validateUsername()).toBe(true);
});

test('Name with bags in -- ', () => {
  const Validator1 = new Validator('-f-');
  expect(Validator1.validateUsername()).toBe(false);
});

test('Name with bags in nambers > 3 ', () => {
  const Validator1 = new Validator('f1234f');
  expect(Validator1.validateUsername()).toBe(false);
});

test('Name with bags in chelenge example f1f1f', () => {
  const Validator1 = new Validator('f1f1f');
  expect(Validator1.validateUsername()).toBe(true);
});
