let nbr = 10;
let str = " chaine de caractères";
let tab = [12, 35, 89, 9, 6];


function increment(n){
    n++
}
increment(nbr);
console.log(nbr);

function upper(chaine){
    chaine = chaine.toUpperCase();
}

str = upper(str);
console.log(str);

function addNumber(liste, num){
    liste.push(num);

}
addNumber(tab, 123456789)
console.log(tab);

function tri(liste){
    liste.sort();
}
tri(tab);
console.log(tab);

function tri(liste){
    let t = [...liste];
    t.sort();
    return t;
}
tab = tri(tab);
console.log(tab);

function es5(){
    console.log(this);
}
const es6 = () =>{ // fonction flecher ne peut pas etre utiliser tout le temps 
    console.log(this);
    return this;
}

const es6_1 = () =>"function es6 sans mes accolades!!"; // es6 approte une fonction dynamique
console.log(es6_1());
const es6_2 = num =>"function es6 num" + num;
console.log(es6_2(10));
const es6_3 =  (num, str) => "fonction es6 num" + num + "et str"+str;
console.log(es6_3(10, "sam"));
const es6_4 = () => { return "fonction es6 avec mes accolades!!";};
console.log(es6_4());
//es5();
//es6();

function returnMultiple(film){ // on veut recupere l'extention du film 
    //Marry-me-1080p-VOSTFR-samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    console.log(name, extension);

}
let [nom, ext] = returnMultiple('Marry-me-1080p-VOSTFR-samsam.mkv');
console.log(nom);
console.log(ext);

function returnMultipleObj(film){ // on veut recupere l'extention du film 
    //Marry-me-1080p-VOSTFR-samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return {nom: name, ext: extension, len: film.length};

}
let {len} = returnMultipleObj('Marry-me-1080p-VOSTFR-samsam.mkv');
console.log(len);
