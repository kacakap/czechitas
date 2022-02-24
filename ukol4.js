// Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti
// nezadá číslo odlišné od 0.
// • Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od
// 0.
// • Po úspěšném zadání čísla, číslo vypiš.


let číslo = prompt("Zadej číslo:");
while (číslo == 0) {
  console.log("Zadej číslo odlišné od 0.")
  číslo = prompt("Zadej číslo:");
}
 console.log(číslo)
