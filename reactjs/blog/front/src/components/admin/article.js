import React from "react";
import { useEffect } from "react";

const AdminArticle = () =>{

    const [cat,setCat]=useState([]);
    const [user,setUser] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:8080/admin/getCatAndUser')
            .then (Response =>Response.json())
            .then(obj => {
                setCat(obj['cat']);
                setUser(obj['user']);
            })

    },[])

    return(
        <div className="newArticle">
            <from action="http://localhost:8080/admin/article" method='post'>
                 <select name="cat" id="cat">
                    {
                        cat &&
                        cat.map(c=> <ption value={c.id}>{c.nom}</ption>)
                    }
                     <option value="bidon">bidon</option>
                 </select>
                 <select name="user" id="user">
                    {
                        user &&
                        user.map(u => <option value={u.id}> {u.prenom + " " + u.nom.toUpperCase()}</option>)

                    }
                     <option value="bidon">bidon</option>
                 </select>
                 <input type="text" name="titre" placeholder='Titre'/>
                 <textarea name="contenu" id="contenu" cols="30" rows="10" placeholder='Contenu'/>
                 <button type="submit">Valider</button>

            </from>
        </div>

}
export default AdminArticle;
