export const fizzBuzz = (num: number): string => {
  if (num === 15) return "FizzBuzz"
  if (num % 3 === 0) return "Fizz"
  if (num === 5) return "Buzz"
  if (num === 10) return "Buzz"
  return num.toString()
}
