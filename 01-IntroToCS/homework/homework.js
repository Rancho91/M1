'use strict';

function BinarioADecimal(num) {
   var potencia = num.length - 1
   var respuesta = 0
for(let i = 0; i < num.length; i++){
   
   respuesta =respuesta + num.charAt(i) * Math.pow(2,potencia);
   potencia--
}

return respuesta;

}

console.log(BinarioADecimal("1101"))
function DecimalABinario(num) {
   var binario = [];
   var decimal = num;
   while (decimal > 1){
   binario.unshift(decimal % 2);
   decimal = Math.floor(decimal/2);
   }
   binario.unshift(decimal);
   return binario.join('');
}

console.log(DecimalABinario("9"))
module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
