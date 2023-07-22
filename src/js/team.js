import Character from './character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character instanceof Character) {
      this.members.add(character);
      return;
    }
    throw new Error('Illegal argument');
  }

  addAll(characters) {
    if (characters == null) {
      throw new Error('Illegal argument');
    }
    if (!Array.isArray(characters)) {
      throw new Error('Illegal argument');
    }
    characters.forEach((character) => this.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }
}
