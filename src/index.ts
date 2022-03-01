// Basic types
let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let x: any = "Hello"

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, string, boolean] = [1, "Brad", true]
// Tuple array
let employee: [number, string][]

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"]
]

// Union
let pid: string | number
pid = "22"

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Left)
console.log(Direction2.Left)

// Objects
// type can be used with primitives and unions
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: "John"
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces, readonly and optional
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "John"
}

// this would return an error because the id is readonly
// user1.id = 50

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, "Brad Traversy")
const mike = new Person(2, "Mike Jordan")

brad.id = 5

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, "Shawn", "Developer")

// Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(["brad", "John", "Jill"])

// current this will push into the numArray as the type is any
numArray.push("hello")

// add a generic
function getArray2<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray2 = getArray2<number>([1, 2, 3, 4])
let strArray2 = getArray2<string>(["brad", "John", "Jill"])

// this will give an error because it's expecting a number
// numArray2.push("hello")
