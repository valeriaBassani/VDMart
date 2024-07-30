//account
import { faker } from '@faker-js/faker';

 interface User {
    [key: string]: FormDataEntryValue;
    name: string;
    lastName: string;
    street: string;
    number: string;
    city: string;
    provincia: string;
    phone: string;
    mail: string;
    password: string;
    confirmPassword: string;
}

export function createUser():User{
    const password = faker.person.firstName();
    return {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        city: faker.location.city(),
        provincia: faker.location.state({ abbreviated: true }),
        phone: faker.phone.number(),
        mail: faker.internet.email(),
        password: password,
        confirmPassword: password,
    };
}

export const registerUser = (userData: User): Promise<User> =>  {
    return Promise.resolve(userData);
}

function getUserByEmail(email:string) {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.email === email);
    return user; 
}

interface logInCredential{
    mail: string;
    password: string;
    remember: boolean;
}

export const accessUser = (credential: logInCredential): Promise<boolean> =>  {
    const user=getUserByEmail(credential.mail)
    if(user){
        if(credential.password===user.password){
            return Promise.resolve(true);
        }
    }
    return Promise.resolve(false);
}