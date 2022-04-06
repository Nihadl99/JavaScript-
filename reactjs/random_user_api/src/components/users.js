import React from 'react';
import OneUser from './one_user';

const Users = () => {
   const [userList, setUserList] = useState([]);

   useEffect( () => {
    // TO DO : faire un featch vers mon API rendomuser
    fetch ('https://randomuser.me/api/?results=5&nat=fr')
       .then(Response => Response.json()
       .then(res => {
           const list = res['results'];
           const userList = list.map(u => toObject(u));
           setUserList(list.map(u => toObject(u)));
       });
   }, []);

   function toObject(user) {
    return {
        gender: user["gender"],
        titleName: user["name"]["title"],
        firstName: user["name"]["first"],
        lastName: user["name"]["last"],
        street: user["location"]["street"]["number"] + " " + user["location"]["street"]["name"],
        city: user["location"]["city"],
        country: user["location"]["country"],
        postCode: user["location"]["postcode"],
        email: user["email"],
        phone: user["phone"],
        cell: user["cell"],
        pictureLarge: user["picture"]["large"],
    };
}

    return(
        <section className="users">
        <button onClick {() => {setIsPress(true)}}>Rafraichi</button>
        {
            userList.lenght > 0
            ? userList.map(user,index ) => <OneUser key ={index} user={user} />)
            : <div className='loading'> Chargement </div>
      
        }
        
        </section>
    )
}

export default Users;