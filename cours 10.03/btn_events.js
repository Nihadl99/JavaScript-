// Pour vérifier les erreurs 

function afficher() {
    document.getElementById('message').innerText = 'Voici le message.';

}
function supprimer() {
    document.getElementById('message').innerText = '';

}

const eMess = document.getElementById('event_mess'); // récupère les buttons
const eSupp = document.getElementById('event_supp');

// on osuhaite rajouter un evements :
eMess.addEventListener('click', afficher);
eSupp.addEventListener('click', supprimer);

// on met directement dans un evenements les events 
document.getElementById('remove_events').addEventListener('click', function(){ // récuperation du 3 eme bouton
    eMess.removeEventListener('click', afficher);
    eSupp.removeEventListener('click', supprimer);
});
// on crée directement la fonction annonyme 
// on recupere le bouton , on lui rajoute le addevenlister , losque je clique dessus on crée un fonction directement à l'interieur et ensuite 
// il recupere les remove et il va soit afficher soit supprimer.
// grace a cette technique on va pouvoir ajouter des evenement mais egalement les supprimés 