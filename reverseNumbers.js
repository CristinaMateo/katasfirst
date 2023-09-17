function digitize(n) {
    let resultado = n.toString().split('').reverse().map((value) => Number(value))
     return resultado
   }

  console.log(digitize(35231))