/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  await new Promise(resolve => setTimeout(resolve, millis));
}

function sleep(millis){
  return new Promise(function(resolve){
      setTimeout(resolve, millis);
  });
}
2
function exam(){
  console.log('start');
  return sleep(1000).then(function(){
      console.log('End');
  });
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/