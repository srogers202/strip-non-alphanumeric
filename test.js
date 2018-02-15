const stripNonAlphanumeric = require('./')

test('it strips only non-alphanumeric strings', () => {
  expect(stripNonAlphanumeric('#$@#)$@')).toBe('');
});

test('it strips non-alphanumeric strings', () => {
  expect(stripNonAlphanumeric('e#x$p(ec))@t!e#d')).toBe('expected');
});

test('it returns alphanumeric strings unchanged', () => {
  expect(stripNonAlphanumeric('No changes needed')).toBe('No changes needed');
});

test('it handles non-strings', () => {
  expect(stripNonAlphanumeric({not: 'a string'})).toMatchObject({not: 'a string'});
  expect(stripNonAlphanumeric(null)).toBe(null);
  expect(stripNonAlphanumeric(1234)).toBe(1234);
  expect(stripNonAlphanumeric()).toBe(undefined);
});