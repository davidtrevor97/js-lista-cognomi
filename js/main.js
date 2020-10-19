//Impostazione variabile e array
var lista = ['bianchi', 'rossi', 'duzioni', 'balsano', 'giorgini'];
var cognome = prompt("Qual è il tuo cognome?").toLowerCase();

//Inserimento cognome in array e restituzione array in ord alfabetico
lista.push(cognome);
lista.sort();

//Restituzione su HTML
document.getElementById("titolo").innerHTML = "Questo è l'array : " + lista + " e questa è la posizione del cognome inserito : " + (lista.indexOf(cognome) + 1 + "°")
