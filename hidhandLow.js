function highAndLow(numbers){
   let arr = numbers.split(' ').map((value) => Number(value))

   let max = arr[0]
    for (let i=0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      };
    }; 
    
    let min = arr[0]
    for (let i=0; i < arr.length; i++) {
    
      if (arr[i] < min) {
        min = arr[i]
      };
    }; 
    
 let resultado = [max, min]
 let final = resultado.toString().replace(/,/g, "");

 return final

}
  

  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))