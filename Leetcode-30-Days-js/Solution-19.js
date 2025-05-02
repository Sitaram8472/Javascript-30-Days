/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
      let results = [];
      let completed = 0;
      let rejected = false;
      
      functions.forEach((fn, index) => {
          fn().then((value) => {
              if(rejected) return;
              results[index] = value;
              completed++;

              if(completed === functions.length){
                  resolve(results);
              }
          })
          .catch((error) =>{
              if(!rejected) {
                  rejected = true;
                  reject(error);
              }
          });
      });
  });
  
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/