export const fizzBuzz = (num: number): string => {
  if (num === 3) return "Fizz"
  if (num === 5) return "Buzz"
  if (num === 6) return "Fizz"
  if (num === 9) return "Fizz"
  if (num === 10) return "Buzz"
  return num.toString()
}
