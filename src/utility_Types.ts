// Partial<T>
type User = {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>
type Product = {
  id: number;
  price: number;
}

type PartialProduct = Partial<Product>

const product: PartialProduct = {

}

const product2: Product = {

}

// Readonly<T>
type User = {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "John"
}

//원하는 속성만 추출
//pick<T, K>

type User = {
  id: number;
  name: string;
  email: string;
}

type UserWithNameOnly = Pick<User, 'name'>

const user: UserWithNameOnly = {
  name: 'Lee'
}

// 특정 속성 제외
// Omit<T, K>
type Product = {
  id: number;
  name: string;
  price: number;
  uniqueCode: number;
}

type ProductWithOmit = Omit<Product, 'uniqueCode'>


//Record<K, T>
type Country = "South Korea" | "United States" | "Canade";
type Capital = string;

type CountryCapitals = Record<Country, Capital>;

const capitals: CountryCapitals = {
  "South Korea": "Seoul",
  "United States": "Washington D.C",
  "Canada": "Ottawa"
}

type CountryInfo = {
  capital: string;
  population: number;
  continent: string;
}

type CountryInfoMap = Record<Country, CountryInfo>

const countryInfo: CountryInfo = {
  'South Korea': {
    capital: "Seoul",
    population: 51_000_000,
    continent: "Asia"
  },
  'United States': {
    capital: "Washington D.C",
    population: 331_000_000,
    continent: "North America"
  },
  'Canada': {
    capital: "Ottawa",
    population: 83_000_000,
    continent: "North America"
  },
}

//Parameters<T>
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>

function someFunction(...param: any) {
  const [id] = param;
}

someFunction(100)

type SaveUser = (name: string, age: number) => void;
type Params = Parameters<SaveUser>

function saveUser(...params: any) {
  const [name, age] = params;
}

saveUser('David', 33)