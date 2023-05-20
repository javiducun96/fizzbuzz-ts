export const fizzBuzz = (input: number): string => {
  const isFizz = containsOrIsMultipleOf(input, 3)
  const isBuzz = containsOrIsMultipleOf(input, 5)
  if (isFizz && isBuzz) return "FizzBuzz"
  if (isFizz) return "Fizz"
  if (isBuzz) return "Buzz"

  return input.toString()
}

const containsOrIsMultipleOf = (input: number, clause: number) => {
  return isMultiple(input, clause) || containsNumber(input, clause)
}

const isMultiple = (input: number, clause: number) => input % clause === 0
const containsNumber = (input: number, clause: number) =>
  input.toString().includes(clause.toString())
