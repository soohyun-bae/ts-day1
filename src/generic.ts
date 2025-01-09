// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// interface GenericInterface<T> {

// }

// class GenericClass<T> {

// }

// let numbers: Array<number> = [1,2,3,4,5]
let strings: Array<string> = ["1", "2", "3"]

function getFirsstElement<T>(arr: T[]): T | undefined {
  if(!arr.length) {
    return undefined;
  }

  return arr[0];
}

// const firstNumber = getFirsstElement(numbers);
const firstString = getFirsstElement(strings);

interface Dict<T> {
  [key: string]: T
}

interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30
}

let entry2: Entry<number, string[]> = {
  key: 1,
  value: ["red", "green", "blue"]
}

// interface strDict {
//   [key: string]: string
// }

let strObj: Dict<string> = {
  name: "Elliot"
}

// interface numDict {
//   [key: string]: number;
// }

let numObj: Dict<number> = {
  age: 30,
}

// generic part2
class Item<T> {
  #content: T | null;

  constructor() {
    this.#content = null;
  }

  setItem(value: T) {
    this.#content = value;
  }

  getItem(): T | null {
    return this.#content;
  }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem();

const stringItem = new Item<string>();
stringItem.setItem("hello")
stringItem.getItem();

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  price: number;
  name: string;
}

interface Store<T> {
  findById(id: number): T | undefined;
  save(item: T): void;
}


class UserRepository implements Store<User> {
  #users: User[] = [];

  findById(id: number): User | undefined {
    return this.#users.find(user => user.id === id);
  }

  save(user: User): void {
    this.#users.push(user);
  }
}

const userRepo = new UserRepository();
userRepo.save({
  id: 1,
  name: 'Josh'
})

userRepo.save({
  id: 2,
  name: 'Amy'
})

console.log(userRepo.findById(1));

class ProductRepository implements Store<Product> {
  #products: Product[] = [];

  findById(id: number): Product | undefined {
    return this.#products.find(product => product.id === id);
  }

  save(product: Product): void {
    this.#products.push(product);
  }
}

const productRepo = new ProductRepository();

productRepo.save({
  id: 10,
  price: 100,
  name: 'keyboard'
})

productRepo.save({
  id: 20,
  price: 200,
  name: 'Mouse'
})

console.log(productRepo.findById(20))