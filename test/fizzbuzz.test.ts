import { fizzBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  it("fizz buzz must return number in these cases", () => {
    expect(fizzBuzz(1)).toEqual("1")
    expect(fizzBuzz(2)).toEqual("2")
    expect(fizzBuzz(4)).toEqual("4")
    expect(fizzBuzz(7)).toEqual("7")
    expect(fizzBuzz(8)).toEqual("8")
  })
  it("fizz buzz must return Fizz with 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz")
  })

  it("fizz buzz must return Buzz with 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz")
  })

  it("fizz buzz must return Buzz with 6", () => {
    expect(fizzBuzz(6)).toEqual("Fizz")
  })

  it("fizz buzz must return Buzz with 10", () => {
    expect(fizzBuzz(10)).toEqual("Buzz")
  })
  it("fizz buzz must return Fizz with 9", () => {
    expect(fizzBuzz(9)).toEqual("Fizz")
  })
})
