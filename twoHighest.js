function twoHighest(arr) {
  if (arr.length === 0) {
    return []
  }
  
  let max = arr[0]
  for (let i=0; i < arr.length; i++) {
  
    if (arr[i] > max) {
      max = arr[i]
    };
  }; 

 const filteredNumbers = arr.filter ( (num)=> num !== max)
 if (filteredNumbers.length === 0) {
    return [max]
  }
 let max2 = filteredNumbers[0] 
   for (let i=0; i < filteredNumbers.length; i++) {
     if (filteredNumbers[i] > max2) {
       max2 = filteredNumbers[i]
     };
   };
 
  return [max , max2]
}

console.log(twoHighest([3, 7, 8, 23, 8, 24, 51, 3]))