export const fizzBuzz = (num: number): string => {
  const isMultipleOfThree = num % 3 === 0
  const isMultipleOfFive = num % 5 === 0
  if (isMultipleOfThree && isMultipleOfFive) return "FizzBuzz"
  if (isMultipleOfThree) return "Fizz"
  if (isMultipleOfFive) return "Buzz"
  return num.toString()
}
