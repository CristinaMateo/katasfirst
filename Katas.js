function isPalindrome(string) {
    let weTried = Array.from(string);
    let test = weTried.reverse();
  
  console.log(weTried)
  console.log(test)
    
    if (weTried === test){
      return weTried, true
    } else {
      return false
    }
  }
  
  let string ='hello'

  