// PROBLEM 4
// Integer Range: -2147483648 to +2147483647 => Max Sum = 2147483647
// Find Max Sage Integer ( private function )
function find_max_safe_input_integer(sum: number): number {
    // using algorithms: sum = n * (n + 1) / 2 => n = ( -1 + sqrt(1 + 8 * sum) / 2 )
    return Math.floor((-1 + Math.sqrt(1 + 8 * sum)) / 2)
}

const MAX_SAFE_INTEGER = 2147483647
const MAX_INPUT_INTEGER = find_max_safe_input_integer(MAX_SAFE_INTEGER)

// validate input ( private function ); Validate Input n by dto ( data transfer to object ) if using api
function validateInput(n: number): void {
    if (n < 1) throw `n: ${n} must be more than 0`
    if (n > MAX_INPUT_INTEGER) throw `n: ${n} must be less or equal than ${MAX_INPUT_INTEGER}`
}

// CODE HERE
// Function 1: Using Recursive To Calculate Sum 
function sum_to_n_a(n: number): number {
    // validate input
    validateInput(n)
    if (n === 1) return 1
    else return n + sum_to_n_a(n - 1)
}

// Function 2: Using For To Calculate Sum
function sum_to_n_b(n: number): number {
    // validate input
    validateInput(n)
    let sum = 0
    for (let i = 1; i <= n; i++)
        sum += i
    return sum
}

// Function 3: Using Math Algorithm To Calculate Sum
function sum_to_n_c(n: number): number {
    // validate input
    validateInput(n)
    return n * (n + 1) / 2
}
// END CODE HERE

// NOTE: Best Solution In 3 Function: Function 3
// CATCH CASE: input must be: integer, > 0, <= MAX_INPUT_INTEGER
const test = 10

console.log('sum_to_n_a:', sum_to_n_a(test))
console.log('sum_to_n_b:', sum_to_n_b(test))
console.log('sum_to_n_c:', sum_to_n_c(test))