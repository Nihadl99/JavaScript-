// on souhaite crée un tableau basique :
let t = [12, 34, "coucou", false];
// en js il sen fou du type car c'est orienter objet 
console.log(t)
//@ts-ignore
let [prenom, nom, age]= ["sam", "mich",40];
console.log(nom, prenom, age);
let t1 = new Array (3);

// ajouter des elements dans un tableau 
t.push("ajout");
console.log(t);

// suppression du dernier élément
t.pop();
console.log(t);
// pop permet de supprimer le dernier element du tableau 

// suppression du premier element d'un tableau 
t.shift();
console.log(t);
//shift permet de supprimer le premier element du tableau 

// inseration en début de tableau 
t.unshift("nihad")
console.log(t);
// pour ajouter un element 

//suppression avec un index
t.splice(2);
console.log(t);

// copie de tableau 

let t2 = [...t];
let t3 = t.slice();
//deux copies de tableau 
console.log(t2, t3);

//pour envoyer des informations :
t.push(12, 56, -23,0);
console.log(t); 
for (let i = 0; i < t.length; i++) {
    if (typeof t[i] !== 'number'){
        t.splice(i, 1);
    }
}
t = t.filter(value => (typeof value === 'number'));
console.log(t);
t.forEach((value, index, arr) =>{
    if (typeof value !== 'number'){
        arr.splice(index, 1);
    }

});
console.log(t);

let t5 = t.map ((nomber |...))=>{
    if(typeof value === 'number'){

        return value ** 3;
    }

});
console.log(t);
