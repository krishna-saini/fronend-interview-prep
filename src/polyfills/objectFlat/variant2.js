function flattenObject(inputObj, prefix = "") {
  let result = {};

  for (const [key, value] of Object.entries(inputObj)) {
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      // If the value is an object, call flattenObject2 recursively
      const newKey = prefix ? prefix + "." + key : key;
      const newObj = flattenObject(value, newKey);
      result = { ...result, ...newObj };
    } else if (Array.isArray(value)) {
      //iterate array
      for (let i = 0; i < value.length; i++) {
        //new key
        const newKey = prefix ? prefix + "." + key + "." + i : key + "." + i;
        result = { ...result, [newKey]: value[i] };
      }
    } else {
      // If the value is not an object or array, add it to the result
      const newKey = prefix ? prefix + "." + key : key;

      result = { ...result, [newKey]: value };
    }
  }

  return result;
}

// Test cases
const input1 = { a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined };
console.log("input", flattenObject(input1));

const input2 = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};
console.log("input2", flattenObject(input2));
