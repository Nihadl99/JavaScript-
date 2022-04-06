import { UserModel } from "./users_model.js";


export const getUsers = async()=> {
    const url = await fetch("https://randomuser.me/api/?nat=fr&results=50");
    const response = await url.json();
    return response ['results'].map(res=>{
        return jsontoUserModel(res);
    })
}
function jsontoUserModel(res){
    const user = new UserModel();
    user.firstName = res['name']['first'];
    user.lastName = res ['name']['last'];
    user.phone = res ['phone'];
    user.location = res ['location']['city'];
    user.age = res ['dob']['age'];
    user.picture = res['picture']['medium'];
    return user;
}
