// Function accepts an array of 16 didgits and verifies if it is a valid credit card number utilizing Luhn's algorithm.

function validateCard(cardArr){

  var odd = [];
  var arr3 = [];
  var arr2 = [...cardArr];
  arr2.pop();
  arr2.reverse();
  for (i = 0; i < arr2.length; i++){
    if (i % 2 == 0){
      arr3.push(arr2[i]);
    }
    
  } 
 
  var doubles = arr3.map(function(e) {
	return e*2;
  });
  for(i=0; i<doubles.length;i++){
    if(doubles[i] > 9){
      doubles[i] = doubles[i] - 9;
    }
  } 
   for (i=0; i <cardArr.length; i++){
    if(i % 2 != 0){
      odd.push(cardArr[i])
    }
   }
  const array = odd.concat(doubles);
  let sum = 0
for (const a of array) {
  sum += a
}
  const mod = sum % 10;
  if (mod == 0) return 'Valid!';
  if (mod != 0) return 'Not Valid!';
}
