function decryptAtbash(cipherText: string){
    let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let tebahpla: string = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
      let alphabet1 : string = "abcdefghijklmnopqrstuvwxyz";
      let tebahpla1L: string = "zyxwvutsrqponmlkjihgfedcba";
      let decoded_string: any = "".replace(/\s/g, "");

      for (let i = 0; i < cipherText.length; i++) {
          let coded_letra = cipherText.charAt(i);  

      if (/[^a-zA-Z]/.test(cipherText[i])) {
          decoded_string = decoded_string+cipherText[i];	
      }
      else if (cipherText[i] === cipherText[i].toUpperCase()) {
              let letraPosMayus = alphabet.indexOf(coded_letra);
              let tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
              decoded_string = decoded_string+tebLetraPosMayus;
          } else {
              let letraPosMinus1 = alphabet1.indexOf(coded_letra);
              let tebLetraPosMinus1 = tebahpla.charAt(letraPosMinus1);
              decoded_string = decoded_string + tebLetraPosMinus1;
          }
      }
      return decoded_string;
  };
  module.exports = {decryptAtbash};