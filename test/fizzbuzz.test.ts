import { fizzBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  it("fizz buzz must return number in these cases", () => {
    expect(fizzBuzz(1)).toEqual("1")
    expect(fizzBuzz(2)).toEqual("2")
    expect(fizzBuzz(4)).toEqual("4")
  })
  it("fizz buzz must return Fizz with 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz")
  })

  it("fizz buzz must return Buzz with 10", () => {
    expect(fizzBuzz(10)).toEqual("Buzz")
  })
})
