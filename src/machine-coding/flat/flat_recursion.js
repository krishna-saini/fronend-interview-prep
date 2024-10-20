

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
    const result = [];
    // loop through array 
    // check if it is not an array , push it in resutl
    // if it is an array,(do depth -- and checck depth)
    // if depth ===0 , push the item in result
    // else  recurively call flat again
  
   arr.forEach((el) => {
   
      if(!Array.isArray(el)){
        result.push(el);
      } else {
        if(depth === 0){
              result.push(el);
  
        } else {
          result.push(...flat(el, depth - 1));
        }
      }
    })
  
    return result;
  }
  console.log(flat([1, [2], [3, [4]]]))
  
  
  
  
  