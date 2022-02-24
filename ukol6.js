/* 
Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2
zadaných čísel, rozdíl zobrazujte jako absolutní hodnotu.
*/
function pocitani(x, y) {
  let soucet = x + y;
  let rozdil = Math.abs(x - y);
  let nasobek = x * y;
  let podil = Math.floor(x / y);

  console.log(soucet, rozdil, nasobek, podil);
}

let x = Number(prompt('Zadejte číslo 1: '));
let y = Number(prompt('Zadejte číslo 2: '));
pocitani(x, y);
