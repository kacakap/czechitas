let jméno = prompt("Jaké je tvoje jméno?");
let věk = prompt("Kolik je ti let?");
let rozdílvěku = 18 - věk
if (věk >= 18){console.log(jméno + " " + věk + " " + "má právo řídit auto.") } 
else {console.log(jméno + " " + věk + " let" + " nemá právo řídit auto, chybí vám " + rozdílvěku + " let.") }
