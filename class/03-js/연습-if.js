if(1+1 === 2){
    console.log("정답입니다!")


}
// VM213:2 정답입니다!
// undefined
if(1+1 === 2){
    console.log("정답입니다!")


} else{
    console.log("틀렸습니다!")
}
// VM289:2 정답입니다!
// undefined
if(1+1 === 3){
    console.log("정답입니다!")


} else{
    console.log("틀렸습니다!")
}
// VM297:6 틀렸습니다!
// undefined
let age = 13
// undefined
age
// 13
if(age>=20){
    console.log("성인입니다.")
}else if(age >= 8) {
    console.log("학생입니다.")
}else {
    console.log("어린이입니다.")
}
// VM696:4 학생입니다.
// undefined
age = 6
// 6
if(age>=20){
    console.log("성인입니다.")
}else if(age >= 8) {
    console.log("학생입니다.")
}else {
    console.log("어린이입니다.")
}
// VM726:6 어린이입니다.
// undefined

const profile = {
    name: "철수", 
    age: 17,
    school: "다람쥐고등학교"
}
// undefined
profile.age
// 17
profile.name
// "철수"
profile.school
// "다람쥐고등학교"

const profile = {
    name:"철수",
    age: 12,
    school:"다람쥐초등학교"
}

if(profile.age >= 20) {
    console.log("성인입니다")
}else if(profile.age >= 8) {
    console.log("학생입니다")
}else {
    console.log("어린이입니다")
} 

// 조건문을 활용하여, 철수의 나이가 20세 이상이면 "성인입니다", 
// 8~19세 이면 "학생입니다",
//  7세 이하면 "어린이입니다"를 console.log를 활용하여 나타내 보세요

// 20세 이상이면이 8~19세중에 19세 조건을 대신 충족해주기 때문에 19세 조건은 빼도 됨