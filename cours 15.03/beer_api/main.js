import { getBeers } from "./beer_service.js";

getBeers(10)
   .then(beers =>{
       let html = beers.map(BeerModel => {
           return `
           <div id="beer-${b.id}">
           <h4>${b.name}</h4>
           <p>${b.description}
           <figure>
           <img src=${b.imageUrl} alt="${b.name}>
           </figure>
           <p>
           <span> premier brassage le : ${b.first.Brewed}</span>
           <span> taux d'alcool : ${b.abv}</span>
           </p>
           </div>`;
       });
       document.getElementById('beers').innerHTML = html.join("");
   })
 
