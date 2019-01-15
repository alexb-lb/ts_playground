function readonly(target, property, descriptor) {
  descriptor.writable = false;
  return descriptor
}

function nonNumerable(target, property, descriptor) {
  descriptor.enumerable = false;
  return descriptor
}

class Car { 
  model: string

  constructor(model) {
    this.model = model;
  }

  @nonNumerable
  getModel() {
    return 'Current model: ' + this.model;
  }

  getSpec(){
    return 'Car specification'
  }
}
const myCar = new Car('Ferrari Testarossa');
console.log(myCar.getModel())

Car.prototype.getModel = () => {
    return 'HACKED';
};
console.log(myCar.getModel())

for(let prop in myCar) {
  console.log(prop);
}


//# sourceMappingURL=decorator.js.map