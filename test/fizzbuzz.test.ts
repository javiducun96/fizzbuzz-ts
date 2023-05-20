import { fizzBuzz } from "../src/fizzbuzz"

describe("FizzBuzz", () => {
  it("fizz buzz must return Fizz with 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz")
  })

  it("fizz buzz must 10 Buzz with 10", () => {
    expect(fizzBuzz(10)).toEqual("Buzz")
  })
})
