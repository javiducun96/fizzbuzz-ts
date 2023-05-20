import { fizzBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  it("fizz buzz must return number in these cases", () => {
    expect(fizzBuzz(1)).toEqual("1")
    expect(fizzBuzz(2)).toEqual("2")
    expect(fizzBuzz(4)).toEqual("4")
    expect(fizzBuzz(7)).toEqual("7")
    expect(fizzBuzz(8)).toEqual("8")
  })

  it("fizz buzz must return number when number is divisible by 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz")
    expect(fizzBuzz(6)).toEqual("Fizz")
    expect(fizzBuzz(9)).toEqual("Fizz")
  })

  it("fizz buzz must return number when number is divisible by 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz")
    expect(fizzBuzz(10)).toEqual("Buzz")
    expect(fizzBuzz(20)).toEqual("Buzz")
  })

  it("fizz buzz must return Buzz with 15", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
  })
})
