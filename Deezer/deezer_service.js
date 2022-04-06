import { DeezerModel } from "./deezer_model.js";

export const getDeezers = async()=> {
    const url = await fetch("https://api.deezer.com/user/2529");
    const response = await url.json();
    return response ['results'].map(res =>{
        return jsontoDeezersModel(res);
    })
}
function jsontoDeezersModel(res){
    const deezer = new DeezerModel();
    deezer.id = res ['data']['id'];
    deezer.title = res ['data']['title'];
    deezer.duration = res ['data']['duration'];
    deezer.picture = res ['data']['picture']['medium'];
    deezer.creation = res ['data']['date'];
    return deezer;
}


