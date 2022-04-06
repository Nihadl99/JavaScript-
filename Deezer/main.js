import { getDeezers } from "./deezer_service.js";

getDeezers()
.then(deezer =>{
    let html = deezer.map(d =>{
        return /*html*/`
        <div class="deezer">
         <div class="album">
          <img src="${d.picture}" alt="pic" />
          <h3>${d.id} ${d.title}</h3>
          <p> voir la duré ${d.duration}</p>
          <p> ce film à été créer en ${d.creation}</p>
         </div>
        </div>`

    })
    document.getElementById('deezer').innerHTML = html.join("");
})