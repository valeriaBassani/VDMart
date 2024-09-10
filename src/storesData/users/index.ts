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
    actives: [],
    purchased: [],
    sold: [],
    review: []
};

export const getUserByEmail = async (email: string): Promise<User> => {
    try {
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.email === email);
        if (user) {
            return Promise.resolve(user);
        } else {
            return Promise.resolve(emptyUser);
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getActualUser = async (): Promise<User> => {
    try {
        const userString = localStorage.getItem('actualUser');
        const user: User = userString ? JSON.parse(userString) : emptyUser;
        return Promise.resolve(user)
    } catch (error) {
        return Promise.reject(error);
    }
}


export const getOtherUser = async (): Promise<string> => {
    try {
        const userMailString = localStorage.getItem('otherUser');
        const userMail: string = userMailString ? JSON.parse(userMailString) : emptyUser;
        return Promise.resolve(userMail)
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getUserAds = async (mail: string): Promise<AdvData[]> => {
    try {
        let ads: AdvData[] = []
        const advertises = localStorage.getItem('advertises');
        if (advertises) {
            const advertisesArray: AdvData[] = JSON.parse(advertises);
            ads = advertisesArray.filter(ad => ad.seller === mail);
        }
        return Promise.resolve(ads);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const updateUsers = (user: User): Promise<void> => {
    try {
        const usersJSON = localStorage.getItem('users');
        const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
        const index = users.findIndex(u => u.email === user.email);
        if (index !== -1) {
            users[index] = user;
        } else {
            users.push(user);
        }
        localStorage.setItem('users', JSON.stringify(users));
        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
}

export const updateActualUser = (user: User): Promise<void> => {
    try {
        localStorage.setItem('actualUser', JSON.stringify(user));
        updateUsers(user)
        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteAccount = (user: User): Promise<void> => {
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
            return Promise.resolve();
        } else {
            return Promise.reject(new Error('User not found'));
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export const deleteAllUserAds = (user: User): Promise<void> => {
    try {
        const usersString = localStorage.getItem('users');
        const users: User[] = usersString ? JSON.parse(usersString) : [];
        const updatedUsers = users.map(u => {
            return {
                ...u,
                favourites: u.favourites.filter((adv: AdvData) => adv.seller !== user.email)
            };
        });
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        return Promise.resolve();

        // const adsJSON = localStorage.getItem('advertises');
        // const ads: AdvData[] = adsJSON ? JSON.parse(adsJSON) : [];
        // const updatedAds = ads.filter(adv => adv.seller !== user.email);
        // localStorage.setItem('advertises', JSON.stringify(updatedAds));
        //return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
}