//account
import { faker } from '@faker-js/faker';
import { getUserByEmail } from '../users';
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
}

export function createUser():User{
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
        favourites:[]
    };
}

// export const registerUser = (userData: User): Promise<User> =>  {
//     return Promise.resolve(userData);
// }

export const registerUser = async (userData: User): Promise<User> => {
        return(userData);
};

interface logInCredential{
    mail: string;
    password:  string;
    remember: boolean;
}

export const accessUser = async (credential: logInCredential): Promise<boolean> => {
    const user= await getUserByEmail(credential.mail)
    if(user){
        if(credential.password===user.password){
            localStorage.setItem('actualUser', JSON.stringify(user));
            return(true);
        }else{
            throw new Error("Password errata");
        }
    }else{
        throw new Error("Utente non trovato");
    }
};