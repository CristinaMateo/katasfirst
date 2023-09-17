function removeExclamationMarks(s) {
 resultado = s.replace(/!/g, "");
 return resultado
  }

  console.log(removeExclamationMarks("Hello! World!!"))