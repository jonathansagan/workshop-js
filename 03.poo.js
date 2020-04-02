// TP03 - PROGRAMMATION ORIENTEE OBJET

//Ex.1 : Fonction constructeur

function Personne(nom, prenom, pseudo){
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;
	this.getNomComplet = function(){
		return this.nom + " " + this.prenom + " " + this.pseudo;
	}
}

var Jules = new Personne ("LEMAIRE", "Jules", "jules77");
var Paul = new Personne ("LEMAIRE", "Paul", "Paul44");

console.log("Le nom de l'objet 'Jules' est : " +Jules.nom);
console.log("Le prénom de l'objet 'Jules' est : "+Jules.prenom);
console.log("Le pseudo de l'objet 'Jules' est : "+Jules.pseudo);
console.log("Le nom complet de l'objet 'Jules' est : "+Jules.getNomComplet());

function afficherPersonne(lambda) {
    console.log("l'affichage complet de la personne est : " + lambda.getNomComplet())
};
afficherPersonne(Paul);

//Ex.2 : Modifier un objet

Jules.pseudo = "jules44";
afficherPersonne (Jules);

//Ex.3 : Ajouter une propriété à Personne

console.log("l'âge de Jules est : "+Jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log("Après prototypage, l'âge de Jules est : "+Jules.age);

Jules.age = 30;
console.log("l'âge de Jules est : "+Jules.age);

//Ex.4 : Ajouter une méthode à Personne

Personne.prototype.getInitiales = function () {
    return this.prenom.charAt(0) + this.nom.charAt(0);
}
console.log("Les initiales de  l'objet 'Jules' sont : "+Jules.getInitiales());

//Ex.5 : Objet sans fonction constructeur
var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
};

afficherPersonne(robert);

//Ex.6 : Héritage via une fonction constructeur

function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return nom + " " + prenom + " " + pseudo + " " + numeroClient;
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
afficherPersonne(steve);
console.log("Le numéro Client de  Steve est : "+steve.numeroClient);
console.log("Les infos de Steve sont : "+steve.getInfos());
