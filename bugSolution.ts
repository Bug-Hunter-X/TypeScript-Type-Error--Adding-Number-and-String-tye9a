function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    return parseInt(a.toString()) + parseInt(b.toString()); 
  } else {
    return a + b;
  }
}

const result1 = add(1, 2); // Correct: 3
const result2 = addSafe(1, '2'); // Correct: 3
const result3 = addSafe('1', 2); // Correct: 3
const result4 = addSafe('1', '2'); //Correct: 3