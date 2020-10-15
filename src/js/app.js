/* eslint-disable no-sequences */
export default class Team {
  constructor(char1, char2, char3) {
    // eslint-disable-next-line no-unused-expressions
    this.char1 = char1,
    this.char2 = char2,
    this.char3 = char3;
  }

  [Symbol.iterator]() {
    const arrKeys = Object.keys(this);
    let index = 0;
    const Person = this;
    return {
      next() {
        if (index <= arrKeys.length - 1) {
          return {
            done: false,
            // eslint-disable-next-line no-plusplus
            value: Person[arrKeys[index++]],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
