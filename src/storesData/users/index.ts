import { User } from "../account";
import { AdvData } from "../products";

export const emptyUser: User = {
    name: '',
    lastName: '',
    street: '',
    number: '',
    city: '',
    provincia: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    favourites: []
};

export const getUserByEmail = async(email:string):Promise<User> => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email);
    if(user){
        return (user); 
    }else{
        return (emptyUser);
    }
}

export const getActualUser= async():Promise<User>=>{
    const userString = localStorage.getItem('actualUser');
    const user: User = userString ? JSON.parse(userString) : emptyUser;
    return(user)
}

export const getUserAds= async(mail:string): Promise<AdvData[]> =>{
    let ads: AdvData[] = []
    const advertises = localStorage.getItem('advertises');
    if(advertises){
        const advertisesArray: AdvData[] = JSON.parse(advertises);
        ads = advertisesArray.filter(ad => ad.seller === mail);
    }
    return(ads);
}

export const updateUsers=(user:User)=>{
    const usersJSON = localStorage.getItem('users');
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    const index = users.findIndex(u => u.email === user.email);
    if (index !== -1) {
        users[index] = user;
    } else {
        users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
}

//throw new Error("Utente non trovato");

export const updateActualUser=()=>{
    const user = localStorage.getItem('actualUser');
    localStorage.setItem('actualUser', JSON.stringify(user));
}