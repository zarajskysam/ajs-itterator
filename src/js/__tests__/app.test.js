import Team from '../app';
import { a1, a2, a3 } from '../characters';

test('itterator test', () => {
  const arr = [];
  const team = new Team(a1, a2, a3);
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 50,
    defence: 10,
  };
  for (const char of team) {
    arr.push(char);
  }

  expect(arr[0]).toEqual(character);
});
