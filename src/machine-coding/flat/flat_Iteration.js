// SOlve above using iteration method not recursion
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flatUsingIteration(arr, depth = 1) {
    // your imeplementation here
    const stack = [];
    arr.forEach((element)=>{
    stack.push([element,depth])
     })
    // push each and every el of arr in stack alon with its depth
  //  const stack = arr.map(element => ([element, depth]));
   console.log(stack)
   const result = [];
  
   while(stack.length>0){
    // pop out top one
    const [topEl, level] = stack.pop(); // O(1)
    // check it topEL is arry
    if(Array.isArray(topEl)){
      if(level>0){
        // push its every element back to stack along with depth
        // because it needs to flatten
         topEl.forEach((element)=>{
           stack.push([element,depth - 1])
     })
      } else {
        result.push(topEl);
      }
    }else {
  result.push(topEl)
    }
   }
   return result.reverse();
  }
  console.log("result", flatUsingIteration([1,2,empty,empty,undefined,[3,4,[5,6,[7,8,[9,10]]]]], Infinity) )