//TP02 : LES FONCTIONS - 

//Ex.1 : forEach() = lecture du tableau
let villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
console.log("le tableau des villes est : ");
villes.forEach(function(el){    
    console.log(el);
});

//Ex.2 : every() 
//= permet de tester si tous les éléments d'un tableau vérifient 
//une condition donnée par une fonction en argument. 
//Cette méthode renvoie un booléen pour le résultat du test.
var lettreADansToutesLesVilles = (currentValue) => currentValue = 'a';
console.log("Lettre A dans toutes les villes : ");
console.log(villes.every(lettreADansToutesLesVilles));

//Ex.3 some() 
//= teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. 
//Elle renvoie un booléen indiquant le résultat du test.
var auMoinsUneVilleAvecUnTiret  = (element) => element = '-';
console.log("Au moins une ville avec un tiret : ");
console.log(villes.some(auMoinsUneVilleAvecUnTiret));

//Ex.4 filter()
//=crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine
// qui remplissent une condition déterminée
var villesSansTiretSansEspace = villes.filter(function (element) {
    return !element.includes(" ") && !element.includes("-");
});
console.log("Liste des villes sans '-' et sans espaces : ");
console.log(villesSansTiretSansEspace);

//Ex.5 Chainer les Fonctions
var villesMajusculeSeTerminantParS = villes.filter(function (element) {
    return element.endsWith('s');
}).map(function (element) {
    return element.toUpperCase();
});

console.log("Liste des villes finissant par un 'S' et en majuscules : ");
console.log(villesMajusculeSeTerminantParS);
