for(let i = 0; i<5; i=i+1){
    console.log("안녕하세요")
}
// 5VM2304:2 안녕하세요
// undefined
for(let i =0; i<5; i++) {
console.log("안녕하세요")
}

// 5VM2481:2 안녕하세요
// undefined
const classmates = ["철수","영희","훈이"]
// undefined
classmates
(3) ["철수", "영희", "훈이"]
for(let j=0; j<2; j++){
  console.log(classmates[j])
}
// VM2912:2 철수
// VM2912:2 영희
// undefined
for(let j=0; j<=2; j++){
  console.log(classmates[j])
}
// VM2916:2 철수
// VM2916:2 영희
// VM2916:2 훈이
// undefined
for(let j=0; j<=2; j++){
  console.log(classmates[j]) + "입니다"
}
// VM2946:2 철수
// VM2946:2 영희
// VM2946:2 훈이
// "undefined입니다"
for(let j=0; j<=2; j++){
  console.log(classmates[j]) + "입니다")
}
VM2956:2 Uncaught SyntaxError: Unexpected token ')'
for(let j=0; j<=2; j++){
  console.log(classmates[j] + "입니다")
}
// VM2969:2 철수입니다
// VM2969:2 영희입니다
// VM2969:2 훈이입니다
// undefined
const classmates2 = [
    {name: "철수", age:13},
    {name: "영희", age:12}
    ]
// undefined
classmates2[0]
{name: "철수", age: 13}
classmates2[0].name
"철수"
classmates2[0].name + "는 " + classmates2[0].age + "살 입니다"
"철수는 13살 입니다"
classmates2[1].name + "는 " + classmates2[1].age + "살 입니다"
"영희는 12살 입니다"
for(let i = 0; i<=1; i++){
console.log(classmates2[i].name + "는 " + classmates2[i].age+ "살 입니다"
}
VM3945:2 Uncaught SyntaxError: missing ) after argument list
for(let i = 0; i<=1; i++){
console.log(classmates2[1].name + "는 " + classmates2[1].age + "살 입니다")
}
// 2VM3959:2 영희는 12살 입니다
// undefined


const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];
// undefined

for(let i=0; i<=10; i++){
console.log(fruits[i].number + " " + fruits[i].title)
}
// VM4526:2 1 레드향
// VM4526:2 2 샤인머스켓
// VM4526:2 3 산청딸기
// VM4526:2 4 한라봉
// VM4526:2 5 사과
// VM4526:2 6 애플망고
// VM4526:2 7 딸기
// VM4526:2 8 천혜향
// VM4526:2 9 과일선물세트
// VM4526:2 10 귤