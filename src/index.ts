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
