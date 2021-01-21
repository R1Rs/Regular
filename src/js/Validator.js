export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return (/^([a-z][a-z-_\d]*[a-z])+$/i.test(this.name) && /^(\D+\d{0,3}\D+)+$/.test(this.name));
  }
}
