export const fizzBuzz = (input: number): string => {
  if (isFizz(input) && isBuzz(input)) return "FizzBuzz"
  if (isFizz(input)) return "Fizz"
  if (isBuzz(input)) return "Buzz"

  return input.toString()
}

const isFizz = (input: number) => containsOrIsMultipleOf(input, 3)
const isBuzz = (input: number) => containsOrIsMultipleOf(input, 5)

const containsOrIsMultipleOf = (input: number, clause: number) => {
  return isMultiple(input, clause) || containsNumber(input, clause)
}

const isMultiple = (input: number, clause: number) => input % clause === 0
const containsNumber = (input: number, clause: number) =>
  input.toString().includes(clause.toString())
