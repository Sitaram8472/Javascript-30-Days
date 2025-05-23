/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let i = init;
  const increment =() => i+=1;
  const decrement =() => i-=1;
  const reset =() =>  i = init;
  return {
      increment,
      decrement,
      reset
  }
  
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/