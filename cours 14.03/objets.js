const gaufrier = new Object();
gaufrier.largeur = 20;
gaufrier.longueur = 15;
gaufrier.cuire = ()=> {
    console.log("cuisson");
} // création d'une fonction 

console.log(gaufrier);
gaufrier.cuire(); // on appel la fonction 

gaufrier = 30;

function Table(largeur, longueur, hauteur){//on crée une fonction 
    this.largeur = largeur;
    this.longueur = longueur;
    this.hauteur = hauteur;

    this.jouer = () =>{
        console.log("je joue au ping-pong");
    }

} 

const tableJeu = new Table(157, 274, 76); //instensiation : tableJeu : objet
tableJeu.materiau = "verre";
tableJeu.nbPied= 4;
delete tableJeu.materiau;
console.log(tableJeu.nbPied);

const sam = { // création d'un objet independant avec ses valeurs 
    prenom: "samuel",
    nom: "michaux",
    age: 40,
    boire:() => {
        console.log("je bois beau ...... de l'eau 😎");
    }

};
console.log(sam);
sam.boire();

//--------------es6--------------
class Personne{
    constructor(prenom, nom, age){
        this._prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.taille = 180;

    }
    get prenom(){
        return this.prenom;
    }
    set prenom(p){
        return
    }
    get nom(){
        return this.nom;
    }
    get age(){
        return this.age;
    }

    get taille(){
        return this._taille;
    }

    get taille(){
        this._taille = nbr;
    }

    manger(){
        console.log("je mange");
    }
    
    toString(){
        return `je m'appelle ${this._prenom} ${this._nom}`;
    }

}
const antony = new Personne("antony", coucke,33);
antony._prenom= "ANTONY";
console.log(antony._prenom);
antony.taille=170;
console.log(antony.taille);
antony.manger();
console.log(antony);

let n = 10;
console.log();



