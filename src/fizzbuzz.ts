const containsOrIsMultipleOf = (input: number, clause: number) => {
  const isMultiple = input % clause === 0
  const containsNum = input.toString().includes(clause.toString())
  return isMultiple || containsNum
}

export const fizzBuzz = (num: number): string => {
  const isFizz = containsOrIsMultipleOf(num, 3)
  const isBuzz = containsOrIsMultipleOf(num, 5)
  if (isFizz && isBuzz) return "FizzBuzz"
  if (isFizz) return "Fizz"
  if (isBuzz) return "Buzz"
  return num.toString()
}
