function reverseWords(str){
  let cosa = str.split(" ").reverse().toString().replace(/,/g, " ")
  return cosa; 
}