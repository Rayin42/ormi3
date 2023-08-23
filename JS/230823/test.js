//스크립트에서
//'use_strict';를 하면 엄격한 규칙 적용
// c = 1; 불가능, 반드시 var c = 1; 해야하는 등

// var는 몇번이고 재선언 가능하지만
// let은 재할당 불가능

// var는 전역변수로 간주해도 괜찮은 느낌, let은 지역변수
// 함수(코드블럭, 스코프) 내에서 선언 시 var는 전역변수화, let은 지역변수화 된다고 보면 됨

//const의 경우 상수라서 재할당 불가능하지만
// const greeting = {
//     message: "say Hi",
//     times: 4
// }
//일 때, 
// greeting = {
//     words: "Hello",
//     number: "five"
// } // error:  Assignment to constant variable.
// 는 불가능하지만
// greeting.message = "say Hello instead";
// 의 경우는 가능(업데이트)

//console.log(typeof a)하면 a 변수 타입 확인 가능 (number, string 등)

//파이썬, 자바스크립트의 모든 값들은 객체 형태다


// ` 백틱 사용시 문자열 사이에 변수를 넣을 수 있따
// 예시 : const a = "안녕"
//        const b = `10 + 3 = ${a}'
//       b 출력 시 : 10 + 3 = 안녕
//       ${a}에 a 값이 잘 들어가서 출력
//이런 형태로 사용 가능
// cosnt 인사 = `${이름} 님 안녕하세요`

//자바스크립트는 뭔가 지멋대로 변수를 바꾸기도 함
//const num = '4'
//num + 2 = '42' (문자열)
//-num = -4
// +num + 2 = 6
// 확인 잘 할 것