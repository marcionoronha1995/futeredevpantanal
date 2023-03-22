function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const tyrone = new Person("Tyrone", "Jones");
  const janet = new Person("Janet", "Smith");
  const maria = new Person("Maria", "Cruz");
  
  console.table([tyrone, janet, maria]);