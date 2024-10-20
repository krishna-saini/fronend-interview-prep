// playground - https://playcode.io/2052183
function flattenObject(inputObj) {
    const result = {};
    // Write your code here
    // first we need to loop through this object
    // how can we loop through object
    for (const [key, value] of Object.entries(inputObj)) {
      console.log(key, value);
      // check if vlaue is not an object
      // how can we check if value is an object
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        // check if value is object
        // if value is object, call flattenObject again
        Object.assign(result, flattenObject(value)); // merger flattenobject in result
        // how can we append two object
      } else {
        // insert it in result directly if not an object
        result[key] = value;
      }
    }
    return result;
  }
  const input = { a: 1, b: { c: 2, d: 3, e: { f: null } }, g: 4, h: undefined };
  console.log(flattenObject(input));
  // Do not edit below this line
  