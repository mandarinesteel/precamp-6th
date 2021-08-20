const email = "codecamp@gmail.com"

email
// "codecamp@gmail.com"

email.includes("@")
// true

email.split("@")
// (2) ["codecamp", "gmail.com"]

email
// "codecamp@gmail.com"

email.split("@")[0]
// "codecamp"

email.split("@")[1]
// "gmail.com"

const front = email.split("@")[0]

const back = email.split("@")[1]

front
// "codecamp"

back

// "gmail.com"

const newFront = []

front
// "codecamp"

front[0]
// "c"

front[1]
// "o"

front[3]
// "e"

newFront.push(front[0],front[1],front[2],front[3])
// 4

newFront.push("*","*","*","*")
// 8

newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]

newFront.join("")
// "code****"

back
// "gmail.com"

newFront.join("")+"@"+back
// "code****@gmail.com"

const result = newFront.join("")+"@"+back

result
// "code****@gmail.com"