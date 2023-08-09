let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

let num: number = undefined
let num1: number = null

// any类型
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'

// Array
let arrOfNumbers: number[] = [1,2,3,4]
arrOfNumbers.push(5)

function test() {
    console.log(arguments)
}

//元组 Tuple
let user: [string, number] = ['viking', 1]
user = ['molly',2]

// interface
interface Person {
    readonly id: number;
    name: string;
    age?: number
}

let viking: Person = {
    id: 1234,
    name: 'viking'
}

function add(x: number, y?: number): number {
    return x + y
}

let result = add(2,3)

// 函数声明
function add1(x: number, y: number, z: number = 10): number{
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

let result1 = add1(2,3,5)

const add2 = function(x: number, y: number, z: number = 10): number {
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

//箭头不是es6中的箭头函数，而是声明返回值类型的方法
const add3: (x: number, y: number, z?: number) => number = add

// enum Direction {
//     Up ,
//     Down,
//     Left,
//     Right
// }
//
// console.log(Direction.Up)
// console.log(Direction[0]) //'Up'

// 枚举
const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
const value = 'UP'
if(value === Direction.Up) {
    console.log('go up!')
}
// console.log(Direction.Up)
// console.log(Direction[0])


