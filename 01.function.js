//TP01 - LES FONCTIONS
console.log("01 - Fonctions")
//Ex.1 Définition d'une variable
let nombre1 = 10;
let nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
};

let resultat1 = additionner(nombre1, nombre2);
console.log("resultat1 = " + resultat1);

// Ex.2 Variable de type fonction
let somme = function additionner(nb1, nb2) {
    return nb1 + nb2;
};

let resultat2 = somme(nombre1, nombre2);
console.log("resultat2 = " + resultat2);

let multiplication = function mutiplier(nb1, nb2) {
    return nb1 * nb2;
};

let resulat3 = multiplication(nombre1, nombre2);
console.log("resultat3 = " + resulat3);

//Ex.3 Fonction comme élément du 1er ordre

let afficherOperation = function afficher(nomOperation, operation, nb1, nb2) {
    return nomOperation + '(' + nb1 + ',' + nb2 + ') = ' + operation(nb1, nb2);
};

console.log(afficherOperation("Somme", somme, 20, 40));
console.log(afficherOperation("Multiplication", multiplication, 10, 20));
console.log(afficherOperation("Soustraction", function (nb1, nb2) {
    return nb1 - nb2
}, 15, 5));