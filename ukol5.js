// Nechte uživatele zadat 2 čísla, které značí dolní a horní mez
// na číselné ose celých čísel – včetně.
// Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.
//Vypište pomocí FOR

let cislo1 = Number(prompt("Zadej číslo 1:"));
let cislo2 = Number(prompt("Zadej číslo 2:"));

for (let i = cislo1 ; i <= cislo2 ; i ++); {
  console.log(i)
}