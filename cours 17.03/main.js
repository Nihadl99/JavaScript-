import { getUsers } from "./users_service.js";

getUsers()
  .then(users =>{
    let html = users.map(u =>{
      return /*html*/`
      <div class="user">
        <div class ="Info">
         <img src="${u.picture}" id="pic" />
         <h3> ${u.fisrtName} ${u.lastName}</h3>
         <div class="secInfo">
         <p> J'ai ${u.age} </p>
         <p> J'habite à ${u.location}</p>
         <p> Mon numéro est ${u.phone} </p>


        </div>
      </div>`
    })
    document.getElementById('users').innerHTML= html.join ("");
  })