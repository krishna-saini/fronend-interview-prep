const input = {
  A: (a, b, c) => {
    return a + b + c;
  },
  B: (a, b, c) => a - b - c,
  C: [10],
  D: {
    E: { F: (a, b, c) => a + b + c },
  },
};

// expected outpute
//
// {
//     A: 3,
//     B: -1,
//     C: 2,
//     D: {
//         E: 3
//     }
// }

// clarifying questions 
// 1. can you tell me more about types of the input object
// 2. can input object takes more than 3 perameters for its function as value
// 3. Should I validate the input, or can I assume it's always valid?


const outputConstructor = (input, ...args) => {
  if (typeof input !== "object" || Array.isArray(input)) {
    return input;
  }
  const output = {};
  for (const [key, value] of Object.entries(input)) {
    output[key] =
      typeof value === "function"
        ? value(...args)
        : outputConstructor(value, ...args);
  }

  return output;
};

const compute = (...args) => {
  console.log("final output ", outputConstructor(input, ...args));
  return outputConstructor(input, ...args);
};
compute(1, 1, 1);

// complexity
/**
 * Each recursive call processes one key-value pair.
 * The total number of recursive calls is proportional to the number of
 * functions in your input.
 * TC - O(n)
 SC - O(n)
 *
 * via recursion - May cause stack overflow for very deep objects
 *
 * try iteration
 */
