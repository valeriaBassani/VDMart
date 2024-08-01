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
    confirmPassword: ''
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

//throw new Error("Utente non trovato");

