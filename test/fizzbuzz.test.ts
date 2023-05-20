import { fizzBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  it("fizz buzz must return number when is not divisible by three and five and not contains 3 or 5", () => {
    expect(fizzBuzz(1)).toEqual("1")
    expect(fizzBuzz(2)).toEqual("2")
    expect(fizzBuzz(4)).toEqual("4")
    expect(fizzBuzz(7)).toEqual("7")
    expect(fizzBuzz(8)).toEqual("8")
  })

  it("fizz buzz must return Fizz when number is divisible by or contains a three", () => {
    expect(fizzBuzz(3)).toEqual("Fizz")
    expect(fizzBuzz(6)).toEqual("Fizz")
    expect(fizzBuzz(9)).toEqual("Fizz")
    expect(fizzBuzz(31)).toEqual("Fizz")
    expect(fizzBuzz(32)).toEqual("Fizz")
    expect(fizzBuzz(33)).toEqual("Fizz")
  })

  it("fizz buzz must return Buzz when number is divisible by or contains a five", () => {
    expect(fizzBuzz(5)).toEqual("Buzz")
    expect(fizzBuzz(10)).toEqual("Buzz")
    expect(fizzBuzz(20)).toEqual("Buzz")
    expect(fizzBuzz(50)).toEqual("Buzz")
    expect(fizzBuzz(52)).toEqual("Buzz")
    expect(fizzBuzz(506)).toEqual("Buzz")
  })

  it("fizz buzz must return FizzBuzz when number is divisible by three and five", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz")
    expect(fizzBuzz(30)).toEqual("FizzBuzz")
    expect(fizzBuzz(45)).toEqual("FizzBuzz")
  })
})
