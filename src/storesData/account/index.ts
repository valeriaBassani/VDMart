//account
import { faker } from '@faker-js/faker';
import { getUserByEmail, updateActualUser, updateUsers } from '../users';
import { AdvData } from '../products';

export interface User {
    //[key: string]: FormDataEntryValue;
    name: string;
    lastName: string;
    street: string;
    number: string;
    city: string;
    provincia: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    favourites: AdvData[];
    actives: AdvData[]
}

export function createUser(): User {
    const password = faker.person.firstName();
    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        city: faker.location.city(),
        provincia: faker.location.state({ abbreviated: true }),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: password,
        confirmPassword: password,
        favourites: [],
        actives: []
    };
}

export const registerUser = async (userData: User): Promise<User> => {
    return (userData);
};

interface logInCredential {
    mail: string;
    password: string;
}

export const accessUser = async (credential: logInCredential): Promise<boolean> => {
    const user = await getUserByEmail(credential.mail)
    if (user.email !== "") {
        if (credential.password === user.password) {
            localStorage.setItem('actualUser', JSON.stringify(user));
            return (true);
        } else {
            throw new Error("Password errata");
        }
    } else {
        throw new Error("Utente non trovato");
    }
};

export const addToFavourites = async (user: User, adv: AdvData) => {
    user.favourites.push(adv)
    updateActualUser(user)
}

export const removeFromFavourites = async (user: User, adv: AdvData) => {
    const fav = user.favourites
    const adIndex = fav.findIndex(ad => ad.id === adv.id);
    if (adIndex !== -1) {
        const newfav = [...fav.slice(0, adIndex), ...fav.slice(adIndex + 1)]
        user.favourites = newfav
        updateActualUser(user)
        updateUsers(user)
    }
}

