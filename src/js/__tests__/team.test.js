import Team from '../team';
import Bowman from '../bowman';

// #region add

test('add should add', () => {
  const team = new Team();
  const character = new Bowman('asd');

  team.add(character);

  expect(team.members.has(character)).toBe(true);
});

test('add should throw if not characters', () => {
  const team = new Team();

  expect(() => team.add('character')).toThrow('Illegal argument');
  expect(() => team.add(null)).toThrow('Illegal argument');
});

// #endregion add

// #region addAll

test('addAll should add', () => {
  const team = new Team();
  const a = new Bowman('aaa');
  const b = new Bowman('bbb');
  const c = new Bowman('ccc');

  team.addAll([a, b, c]);

  expect(team.members.has(a)).toBe(true);
  expect(team.members.has(b)).toBe(true);
  expect(team.members.has(c)).toBe(true);
});

test('addAll should throw if not character', () => {
  const team = new Team();
  const a = new Bowman('aaa');
  const c = new Bowman('ccc');

  expect(() => team.addAll('asd')).toThrow('Illegal argument');
  expect(() => team.addAll([a, 'b', c])).toThrow('Illegal argument');
  expect(() => team.addAll([a, null, c])).toThrow('Illegal argument');
});

// #endregion addAll

// #region toArray

test('toArray should convert to array', () => {
  const team = new Team();
  const a = new Bowman('aaa');
  const b = new Bowman('bbb');
  const c = new Bowman('ccc');
  team.addAll([a, b, c]);

  const array = team.toArray();

  array.forEach((element) => {
    expect(team.members.has(element));
  });
});

test('toArray should convert if empty', () => {
  const team = new Team();
  team.addAll([]);

  const array = team.toArray();

  expect(array.length).toBe(0);
});

// #endregion toArray
