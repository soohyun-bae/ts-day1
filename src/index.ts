function hello(name: string){
  console.log(`Hello ${name}`);
}

hello("Typescript");

// string
const a: string = ''
const b: string = ""
const c: string = ``

let myName: string = "Steve";
let message: string = `Hello, ${myName}`

myName.toLocaleUpperCase()

// number
let n: number = 100;
let count: number = 10
let price: number = 9.99
let temperature: number = -15
let distance: number = 3.4e-5

let total: number = count * price;
let average: number = total/2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotaNumber: number = NaN;

//boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
  console.log("hello we are open!")
}

if(!isCompleted) {
  console.log("job not complete")
}

let isAvailable: boolean = isOpen && !isCompleted;

// null
let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey")
logout()

//any : 모든 타입 허용 
// any타입인 변수에 대한 타입 체크를 하지 않음
// 어쩔 수 없이 사용하는 경우가 아니면 사용하지 않는 것을 권장
let someVvalue: any;

someVvalue.toString()
someVvalue = false;
someVvalue.toFixed()

// 배열 타입 1: type[]
let nums: number[] = [1,2,3,4,5] //숫자만 허용
let strs: string[] = ['a', 'b', 'c', 'd'] //문자열만 허용

nums.push(6)
nums.push(7)

// nums.push("8")
// nums[0] = "1"

//배열 타입 2: Array<>
let nu: Array<number> = [1,2,3,4,5] 
let s: Array<string> = ['a', 'b', 'c', 'd'] 

// 기본 객체 타입 - 타입 명시
let monitor: {brand: string; price: number}

// monitor.brand = "LG"
// monitor.price = 120

monitor = {
  brand: "LG",
  price: 120
}

// 타입 추론
let mon = {
  brand: "LG", 
  price: 120
}

// optional 프로퍼티: ?
let use: {id: string; name: string; age?: number};

use = {
  id:"1234",
  name: "John"
}

// Readonly 프로퍼티

let u: {readonly id: string; name: string; age?: number}

u={
  id: "1234",
  name: "John"
  }

  // u.id = "5678"

  //타입 별치 (Type Alias)
type UserType = {
  id: string;
  name: string;
  age: number;
}

let user1: UserType = {
  id: "1",
  name: "John",
  age: 20
}

let user2: UserType = {
  id: "2",
  name: "Sarah",
  age: 30
}

let users: UserType[];

users.push(user1)
users.push(user2)

// Nested 객체 (중첩 객체)
type Payload = {
  timestamp: number;
  type: string;
  user: {
    readonly id: string;
    isActive?: boolean
  }
}

const payload: Payload = {
  timestamp: 12893718,
  type: 'event',
  user: {
    id: "123",
    isActive: true
  }
}

//파라미터
function add(x: number, y: number): number {
  return x + y;
}

const result = add(10, 5);

//파라미터 2
function addToCart(name: string, price: number, quantity: number) {
  return `${name}, ${price}, ${quantity}`;
}

addToCart("orange", 100, 5)

// default parameter
function addTo(name: string, price: number, quantity: number = 1) {
  return `${name}, ${price}, ${quantity}`
}

addTo("orange", 100)
addTo("grape", 100, 2)

// optional parameter
function addToC(name: string, price: number, quantity?: number) {
  return `${name}, ${price}, ${quantity}`
}

addToC("orange", 150)
addTo("grape", 100, 2)

// Contextual typing
const numbers: number[] = [1,2,3,4,5];
const letters: string[] = ['a', 'b', 'c', 'd']

numbers.map(element => {
  element.toFixed
})

letters.forEach(letter => {
  letter.charAt
})

// Return type annotation
function addTwoValues(x: number, y: number): string {
  return `${x}${y}`
}

function addTwoNumbers(x: number, y: number): number {
  return x + y
}

function isTen(x: number, y: number): boolean {
  return x + y === 10
}

// void : 반환값 없음, never : 절대로 반환값이 존재하지 않을 것임
function logMessage(message: string): void {
  console.log(message)
}

// 많이 사용 안함
function throwError(message: string): never {
  throw new Error(message)
}

// 유니언
let userId: string | number;

userId = 1
userId = "100"

function printUserId(id: string | number) {
  console.log(id)
}

printUserId("1")
printUserId(1)

// type narrowing
function processValue(value: number | string) {
  // 문자열일 경우
  if(typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toString().toUpperCase()
}

// 배열 사용 예시
let mixedValues: (string | number | boolean)[];

mixedValues.push("100")
mixedValues.push(100)

// 리터럴과 유니언 타입
const toggle = (option: "on" | "off") => {
  console.log(option)
}

toggle("on")
toggle("off")

type Size = "xs" | 's' | 'l' | 'xl'

let tShirtSize: Size;

tShirtSize = 'l'

tShirtSize = 's'

function setSize(size: Size) {
  switch(size) {
    case 'xs':
      //...
      break;
    case 's':
      //...
      break
  }
}

// type aliases와 유니언
type SuccessCode = 200 | 201 | 202
type ErrorCode = 500 | 501 | 503

// interface
interface User {
  id: number;
  name: string;
  isPremium: boolean;
  someMethod(): void;
}

const userA: User = {
  id: 10,
  name: "Bill",
  isPremium: false,
  someMethod() {
    console.log("some method called")
  },
}

//type alias vs interface
// 두 기능의 목적은 크게 다르지 않다.
// type alias => type User = { }
// interface => interface User { }
// type alias는 객체 포함, 리터럴, 원시값 등을 타입으로 가질 수 있다.
// 인터페이스는 객체 타입(형태)으로 사용해야 한다. 

// interface readonly, optional
interface User2 {
  readonly id: number;
  name: string;
  isPremium?: boolean;
}

//interface 메서드/함수 타입
interface User3 {
  readonly id: number;
  name: string;
  isPremium?: boolean;
  greet(): void
}

const testUser: User3 = {
  id: 100,
  name: "Nathan",
  isPremium: false,
  greet() {
    console.log("Hello Nathan")
  },
}

// interface 확장 및 조합
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentId: number;
}

const personA: Person = {
  name: "Eli",
  age: 30
}

const studentA: Student = {
  name: "John",
  age: 29,
  studentId: 12345
}

//튜플
let myTuple: [string, number, boolean]

myTuple = ["Hello", 15, false]
// myTuple = ["Hello", false, 15] 순서가 중요하기 때문에 오류남

// 사용 예시 1
function getUserInfo(): [number, string] {
  return [1, "sam"]
}

const [userid, username] = getUserInfo()

// 사용 예시 2
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price]

const vanila: IceCream = ['Vanila', 500]

// 사용 예시 3
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -95])

for(const [lat, lng] of coords) {
  console.log(lat, lng)
}

// enum
enum 이름 {
  상수값1,
  상수값2,
  상수값3
}

// 숫자형 enum
enum PlayerState {
  Buffering, 
  Playing,
  Paused,
  Seeking,
}

let currentState: PlayerState;

currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

const isPlaying = (state: PlayerState) => {
  return state === PlayerState.Playing;
}

// 플레이어 재생중?
isPlaying(currentState); //true

// 문자형 enum
enum Direction {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN"
}

function move(dir: Direction) {
  switch(dir) {
    case Direction.Left:
      //...
      break;
    case Direction.Right:
      //...
      break;
  }
}