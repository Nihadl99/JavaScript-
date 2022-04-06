import React,{useState, useEffect} from "react";

import { useParams } from "react-router-dom";
import { toModel } from "../../models/card_model";
import { finById } from "../../services/card_list_service";

const CardDesc = () => {


    const { idCard} = useParams();
    const [card, setCard] = useState ();

    useEffect( () =>{
        finById(idCard)
            .then(obj => {
                 const cards = toModel (obj).cards;
                 if (cards.length > 0) {
                     setCard(cards [0]);
                }
            })

    },[])


    return (
        <div>
           {card &&
                <fragment>
                  <p> {card.name}</p> 
                  <p> type : {card.type}</p> 
                  <p> race : {card.race}</p> 
                  <p> {card.description}</p> 
                  <img src={card.imageMedium} alt=""/>
                  <p> prix : {card.cardmarketPrice}</p>
                </fragment>
            }

        </div>   
    )
}

export default CardDesc;
// dans l'index js on a preparer une route en lui disant qu'a un moment donner a 
//la racine tu risque de recevoir , je veux que tu la recupere et quand tu va trouver quelque choses tu vas le chercher 
// une fois que c'est fait tu l'affiches 

// },[]) permet de bloquer et de ne pas recharger

// const cards = toModel (obj).cards; tableau permettant de recuperer les carte 
