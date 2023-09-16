function isPalindrome(string){
    let weTried = Array.from(string.toLowerCase());
    let test = weTried.reverse();
    let text = test.toString();
    const re = /,/g
    let final = text.replace(re,'')
    if (string.toLowerCase() === final){
      return true
    } else {
      return false
    }
  }

//solucion:

const isPalindrome2 = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

console.log(isPalindrome("abba"))
console.log(isPalindrome2("Abba"))