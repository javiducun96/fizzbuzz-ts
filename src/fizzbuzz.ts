export const fizzBuzz = (num: number): string => {
  const isFizz = num % 3 === 0 || num.toString().includes("3")
  const isBuzz = num % 5 === 0 || num.toString().includes("5")
  if (isFizz && isBuzz) return "FizzBuzz"
  if (isFizz) return "Fizz"
  if (isBuzz) return "Buzz"
  return num.toString()
}
