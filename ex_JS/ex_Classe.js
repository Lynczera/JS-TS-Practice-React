class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getNome() {
    return 'elias'
  }
}

console.log(new User('Elias', 'teste@gmail.com').name)