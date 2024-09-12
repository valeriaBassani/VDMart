//account
import { faker } from '@faker-js/faker';
import { getUserByEmail, updateActualUser, updateUsers } from '../users';
import { AdvData } from '../products';
import userJson from '../fillLS.json'

export interface UserReview {
    //id: string;
    reviewer: string;
    content: string;
    rating: number;
    date: string;
    productId?: number;
}
export interface User {
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
    actives: AdvData[];
    purchased: AdvData[];
    sold: AdvData[];
    review: UserReview[]
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
        actives: [],
        purchased: [],
        sold: [],
        review: []
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


// export const isLoggedIn = (): Promise<boolean> => {
//     try {
//         const usersJSON = localStorage.getItem('actualUser');
//         if (usersJSON) {
//             return Promise.resolve(true)
//         } else {
//             return Promise.resolve(false)
//         }
//     } catch (error) {
//         return Promise.reject(error);
//     }
// }

export const saveReview = (rev: UserReview, seller: User): Promise<void> => {
    try {
        const user = seller
        user.review.push(rev)
        updateUsers(user)
        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error);
    }

}

export const getRatingVote = (user: User): Promise<number> => {
    try {
        if (user.review.length === 0) {
            return Promise.resolve(0)
        }
        const sum = user.review.reduce((acc, review) => acc + Number(review.rating), 0);
        const average = sum / user.review.length;
        return Promise.resolve(average)
    } catch (error) {
        return Promise.reject(error);
    }
}

export function createFirstUser() {
    const user = {
        name: "Valeria",
        lastName: "Bassani",
        street: "via francesco cardinale carrara",
        number: "4",
        city: "ghisalba",
        provincia: "BG",
        phone: "3475693160",
        email: "bassanivaleria01@gmail.com",
        password: "1234",
        confirmPassword: "1234",
        favourites: [],
        actives: [],
        purchased: [],
        sold: [],
        review: []
    }
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
}

export function fillLs() {
    localStorage.setItem('users', JSON.stringify(userJson));
}


// const categories = ['Tech', 'House', 'Clothing', 'Animals'];

// let adIdCounter = 0; // Global counter for ad IDs

// const generateRandomNumber = (min: number, max: number): number => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const generateRandomString = (length: number): string => {
//     return Math.random().toString(36).substring(2, length + 2);
// };
// const generateRandomDate = (): string => {
//     const start = new Date(2020, 0, 1);
//     const end = new Date();
//     const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//     return date.toISOString().split('T')[0];
// };


// const generateAdvData = (seller: string): AdvData => {
//     const adData: AdvData = {
//         id: adIdCounter++,
//         title: faker.commerce.productName(),
//         price: parseFloat(faker.commerce.price()),
//         category: categories[generateRandomNumber(0, categories.length - 1)],
//         shipping: Math.random() > 0.5,
//         shippingPrice: generateRandomNumber(0, 20),
//         publishData: generateRandomDate(),
//         seller,
//         phone: generateRandomString(10),
//         description: faker.lorem.paragraph(),
//         images: Array.from({ length: generateRandomNumber(1, 5) }, () => faker.image.urlLoremFlickr({ category: 'technology' })),
//     }
//     return adData;
// };

// const generateUserReview = (reviewer: string): UserReview => ({
//     reviewer,
//     content: generateRandomString(100),
//     rating: generateRandomNumber(1, 5),
//     date: generateRandomDate(),
//     productId: generateRandomNumber(0, adIdCounter - 1),
// });


// const generateUser = (id: number): User => {
//     const name = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const street = faker.location.street();
//     const number = faker.location.buildingNumber();
//     const city = faker.location.city();
//     const provincia = faker.location.state({ abbreviated: true });
//     const phone = generateRandomString(10);
//     const email = faker.internet.email();
//     const password = generateRandomString(8);
//     const confirmPassword = password;

//     return {
//         name,
//         lastName,
//         street,
//         number,
//         city,
//         provincia,
//         phone,
//         email,
//         password,
//         confirmPassword,
//         favourites: [],
//         actives: Array.from({ length: 3 }, () => generateAdvData(email)),
//         purchased: [],
//         sold: [],
//         review: Array.from({ length: 2 }, () => generateUserReview(email)),
//     };
// };

// export const generateUsers = (count: number): User[] => {
//     return Array.from({ length: count }, generateUser);
// };


