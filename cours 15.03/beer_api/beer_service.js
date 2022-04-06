import { BeerModel} from "./beer_model.js";
//export function test(){
//    fetch("https://api.punkapi.com/v2/beer?page=1&per_page=" +numberBeer)
    
//    .then (Response.json())
//    .then(result => {
//            console.log(result);
//        })
    
//}


async function getBeers(numberBeer = 10){
    const response = await fetch("https://api.punkapi.com/v2/beer?page=1&per_page=" +numberBeer)
    const result = await response.json();
    console.log(jsonToBeerModel(result));

}
function jsonToBeerModel(beersJson){
    // je veux créer un liste de BeerModel
    return beersJson.map(js => {
        return new BeerModel(

            // document recuperer un objet 
            js['id'], 
            js['name'],
            js['first_brewed'],
            js['description'],
            js['image_url'],
            js['abv']

        );


    });
}
export{getBeers};