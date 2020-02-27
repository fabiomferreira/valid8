const valid8 = require('./index');

test('returns false when required', () => {
  const value = ''
  expect(valid8.required(value)).toBeFalsy()
})

test('returns true when required', () => {
  const value = 'test'
  expect(valid8.required(value)).toBeTruthy()
})