function isPalindrome(string) {
    let weTried = Array.from(string);
    let test = weTried.reverse();
 
    if (weTried === test){
      return weTried, true
    } else {
      return false
    }
  }
  console.log(isPalindrome("patata"))