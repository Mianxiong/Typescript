// global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()

const reg = /abc/
reg.test("abc")

// build-in object
Math.pow(2, 2)

// DOM and BOM
let body = document.body
let allLis = document.querySelectorAll("li")
allLis.item(1)

document.addEventListener("click", (e) => {
    e.preventDefault()
})

// DOM and BOM

//Utility Types
interface IPerson {
    name: string
    age: number
}

let ice: IPerson = {name: "ice", age: 20}
type IPartial = Partial<IPerson>
let ice2: IPartial = {name: "ice"}
type IOmit = Omit<IPerson, "name">
let ice3: IOmit = {age: 20}