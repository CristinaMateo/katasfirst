/* function onesCounter(input) {
    let numberOnes = 0 
    for (let i=0; i < input.length; i++) {
      if (input[i]===1){
        numberOnes++
      } else {
       numberOnes=0
      }
     
    } return counting
  } */

  function onesCounter(input) {
    let llevo= 0
    let res =[]
    for(let i=0; i<input.length; i++){
      if(input[i]===1){
        llevo++
      } else if (input[i]!==1 && llevo !== 0) {
        res.push(llevo)
        llevo=0
      } 
   } if (llevo!==0){
     res.push(llevo)
   }
    return res
    
    }

    console.log(onesCounter([1,1,1,1,1]))


