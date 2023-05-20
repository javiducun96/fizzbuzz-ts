export const fizzBuzz = (num: number): string => {
  const isDivisibleBy3 = num % 3 === 0
  const isDivisibleBy5 = num % 5 === 0
  if (isDivisibleBy3 && isDivisibleBy5) return "FizzBuzz"
  if (isDivisibleBy3) return "Fizz"
  if (isDivisibleBy5) return "Buzz"
  return num.toString()
}
