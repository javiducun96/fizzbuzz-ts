export const fizzBuzz = (num: number): string => {
  const isFizz = num % 3 === 0 || num.toString().includes("3")
  const isMultipleOfFive = num % 5 === 0
  if (isFizz && isMultipleOfFive) return "FizzBuzz"
  if (isFizz) return "Fizz"
  if (isMultipleOfFive) return "Buzz"
  return num.toString()
}
