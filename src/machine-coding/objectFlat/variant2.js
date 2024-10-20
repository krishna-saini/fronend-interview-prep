// https://codesandbox.io/p/sandbox/javascript-forked-33tsdy
function flattenObject2(inputObj, prefix = "") {
    let result = {};
  
    for (const [key, value] of Object.entries(inputObj)) {
      const newKey = prefix ? `${prefix}.${key}` : key; // Generate the new key
  
      if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        // If the value is an object, call flattenObject2 recursively
        const newObj = flattenObject2(value, newKey);
        result = { ...result, ...newObj };
      } else if (Array.isArray(value)) {
        // If the value is an array, iterate through its elements
        for (let i = 0; i < value.length; i++) {
          const arrayKey = `${newKey}.${i}`;
          result = { ...result, [arrayKey]: value[i] };
        }
      } else {
        // If the value is not an object or array, add it to the result
        result = { ...result, [newKey]: value };
      }
    }
  
    return result;
  }
  
  // Test cases
  const input1 = { a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined };
  console.log("input", flattenObject2(input1));
  
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
  console.log("input2", flattenObject2(input2));
  
  // Test cases
  //   const input = { a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined };
  console.log("3", flattenObject(input1));
  
  console.log("4", flattenObject(input2));
  