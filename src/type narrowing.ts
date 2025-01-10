// 타입 좁히기
type Id = number | string;

let id: Id = 1;

if(typeof id === 'string') {

}

function getId(id: Id) {
  if(typeof id === 'number') {
    return id;
  }
  return Number(id)
}

getId(1)
getId(2)

// 동일성 좁히기
type Option = 'on' | 'off'

function power(option: Option) {
  if(option === 'off') {
    console.log('power off')
  } else {
    console.log('power on')
  }
}

power('on')
power('off')

// in 키워드 사용

type iOS = { iMessage: () => void }
type android = { message: () => void }

function sendMessage(os: iOS | android) {
  if('iMessage' in os) {
    os.iMessage()
  } else {
    os.message()
  }
}

// instanceof narrowing
class ApiResponse {
  data: any;
}
class ErrorResponse {
  message: string;
}

async function handleApiResponse(response: any) {
  if(response instanceof ApiResponse) {
    // 데이터 처리
  } else if (response instanceof ErrorResponse) {
    // 에러 처리
  }
}

const apiResponse = new ApiResponse()
const errorResponse = new ErrorResponse();

handleApiResponse(apiResponse)
handleApiResponse(errorResponse)

// 타입 가드(type predicates)
function isErrorResponse(response: ApiResponse | ErrorResponse): response is ErrorResponse {
  return (response as ErrorResponse).message !== undefined;
}

const response = { message:'error..'};
if(isErrorResponse(response)) {
  console.log(response.message)
}

// 식별 가능한 유니언 타입 (discriminated union)
type SuccessResponse = {
  type: 'success',
  data: any;
}

type ErrorResponseType = {
  type: 'error',
  message: string
}

type ApiResponseType = SuccessResponse | ErrorResponseType;

function handleResponse(response: ApiResponse) {
  if(response.type === 'success') {
    console.log('data', response.data)
  } else {
    console.log(response.message)
  }
}