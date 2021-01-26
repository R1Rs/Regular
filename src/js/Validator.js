export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return (/^([a-z][a-z-_\d]*[a-z])+$/i.test(this.name) && !/^[\d-_]$/.test(this.name) && !/\d{4}/.test(this.name));
  }
}
