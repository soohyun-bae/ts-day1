// JS에서 제공되는 모든 DOM API를 그대로 사용
// 타입 정의 파일 제공 'lib.dom.d.ts'

const link1 = document.getElementById('myLink') as HTMLAnchorElement
const link2 = document.querySelector('#myLink') as HTMLAnchorElement

link1.href = ''
link2.href = ''

const img = document.createElement('img')
img.src = ''

const anchor = document.createElement("a")

anchor.href = ''

const div = document.querySelector('div')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.click()
})

// <div id='myDiv'><div>

const myDiv = document.getElementById('myDiv')

myDiv?.addEventListener('click', (e: MouseEvent | KeyboardEvent) => {

  if(e instanceof MouseEvent) {
    const x = e.clientX;
    const y = e.clientY
  }

  if(e instanceof KeyboardEvent) {
    console.log(e.code)
  }
})
