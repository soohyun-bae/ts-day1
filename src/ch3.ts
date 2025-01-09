interface ContinentInterface {
  getContinentName(): string;
}

class Continent {
  continentName : string;

  constructor(name: string) {
    this.continentName = name;
  }

  getContinentName() {
    return this.continentName;
  }
}

class Country extends Continent{
  name: string;
  capital: string;

  constructor(continentName: string, name: string, capital: string) {
    super(continentName)
    this.name = name;
    this.capital = capital;
  }

  getInfo() {
    return `${this.name}, ${this.capital}, ${this.getContinentName()}`
  }
}

let country = new Country("Asia", "South Korea", "Seoul")
console.log(country)