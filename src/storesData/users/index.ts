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
    favourites: [],
    actives: []
};

export const getUserByEmail = async (email: string): Promise<User> => {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email);
    if (user) {
        return (user);
    } else {
        return (emptyUser);
    }
}

export const getActualUser = async (): Promise<User> => {
    const userString = localStorage.getItem('actualUser');
    const user: User = userString ? JSON.parse(userString) : emptyUser;
    return (user)
}

export const isLoggedIn = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        try {
            const usersJSON = localStorage.getItem('actualUser');
            if (usersJSON) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(error);
        }
    });
}

export const getOtherUser = async (): Promise<User> => {
    const userString = localStorage.getItem('otherUser');
    const user: User = userString ? JSON.parse(userString) : emptyUser;
    return (user)
}

export const getUserAds = async (mail: string): Promise<AdvData[]> => {
    let ads: AdvData[] = []
    const advertises = localStorage.getItem('advertises');
    if (advertises) {
        const advertisesArray: AdvData[] = JSON.parse(advertises);
        ads = advertisesArray.filter(ad => ad.seller === mail);
    }
    return (ads);
}

export const updateUsers = (user: User) => {
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

export const updateActualUser = (user: User) => {
    localStorage.setItem('actualUser', JSON.stringify(user));
    updateUsers(user)
}

export const deleteAccount = (user: User): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            try {
                deleteAllUserAds(user)
            } catch (error) {
                console.log("erorre nel rimuovere gli annunci dell'utente");
            }
            const usersJSON = localStorage.getItem('users');
            const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
            const index = users.findIndex(u => u.email === user.email);
            if (index !== -1) {
                users.splice(index, 1);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.removeItem('actualUser');
                resolve();
            } else {
                reject(new Error('User not found'));
            }
        } catch (error) {
            reject(error);
        }
    });
}

export const deleteAllUserAds = (user: User): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            const adsJSON = localStorage.getItem('advertises');
            const ads: AdvData[] = adsJSON ? JSON.parse(adsJSON) : [];
            const updatedAds = ads.filter(adv => adv.seller !== user.email);
            localStorage.setItem('advertises', JSON.stringify(updatedAds));
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}