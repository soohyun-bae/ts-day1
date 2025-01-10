// 객체나 배열을 변경불가능하게 만들어줄 수 있ㅇ므
// const objName = {} as const;

// const arrName = [] as const;

const book = {
  title: 'TypeScript Guide',
  author: 'coding moon'
} as const;

// book.title = 'another title'; => error

const nums = [1,2,3,4,5] as const;
// nums.puch(6) => error

const config = {
  server: 'https://api.somedomain.com',
  port: 8080,
  version: 2
} as const;

// config.server = 'https:' => error

export const statusCodeMap = {
  101: 'ordered',
  102: 'pending',
  103: 'completed'
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
  const message = statusCodeMap[statusCode]

  // UI 업데이트 또는 로직 처리
}