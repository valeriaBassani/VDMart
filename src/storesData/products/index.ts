import { faker } from "@faker-js/faker";
import { getActualUser, getUserByEmail, updateActualUser, updateUsers } from "../users";

export interface AdvData {
    id: number,
    title: string,
    price: number,
    category: string,
    shipping: boolean,
    shippingPrice: number,
    publishData: string,
    seller: string,
    phone: string,
    description: string
    images: string[];
}

const categories = [
    'Tech',
    'House',
    'Clothing',
    'Animals',
];

const getRandomCategory = (categories: string[]): string => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};

export const emptyAds = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    shipping: false,
    shippingPrice: 0,
    publishData: "",
    seller: "",
    phone: "",
    description: "",
    images: []
}

export const createAdv = async (): Promise<AdvData> => {
    const user = await getActualUser()
    return {
        id: await getId(),
        title: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        category: getRandomCategory(categories).toLocaleLowerCase(),
        shipping: faker.datatype.boolean(),
        shippingPrice: parseFloat(faker.commerce.price()),
        publishData: faker.date.anytime().toISOString(),
        //seller: faker.internet.email(),
        seller: user.email,
        phone: faker.phone.number(),
        description: faker.lorem.paragraph(),
        images: []
    };
}

export const saveAdv = async (adv: AdvData): Promise<AdvData> => {
    return (adv);
}

export const getAds = async (): Promise<AdvData[]> => {
    const usersString = localStorage.getItem('users');
    const user = await getActualUser();
    let ads: AdvData[] = [];

    if (usersString) {
        const users = JSON.parse(usersString);
        users.forEach((u: any) => {
            if (u.actives && u.email !== user.email) {
                ads = [...ads, ...u.actives];
            }
        });
    }
    return ads;
};

export const getActualAdv = async (): Promise<AdvData> => {
    const adsString = localStorage.getItem('actualAdv');
    const adv: AdvData = adsString ? JSON.parse(adsString) : emptyAds;
    return adv
}

export const getId = async (): Promise<number> => {
    const advertisesString = localStorage.getItem('advertises');
    if (advertisesString) {
        const advertises: AdvData[] = JSON.parse(advertisesString);
        const index = advertises.length;
        return (index)
    } else {
        return (0)
    }
};

export const orderByDate = (ads: AdvData[], orderBy: boolean): AdvData[] => {
    return ads.sort((a, b) => {
        const dateA = new Date(a.publishData);
        const dateB = new Date(b.publishData);
        if (orderBy) {
            return dateA.getTime() - dateB.getTime();
        } else {
            return dateB.getTime() - dateA.getTime();
        }
    });
}

// export const setMaxPrice = async (): Promise<number> => {
//     const ads = await getAds()
//     let max = 0
//     ads.map((adv) => {
//         if (adv.price > max) {
//             return max = adv.price
//         }
//     })
//     return max
// }

export const isFavourite = async (adv: AdvData): Promise<boolean> => {
    const userString = localStorage.getItem('actualUser')
    if (userString) {
        const user = JSON.parse(userString);
        const fav = user.favourites
        const adIndex = fav.find((ad: { id: number; }) => ad.id === adv.id);
        if (adIndex) {
            return (true)
        } else {
            return (false)
        }
    } else {
        throw new Error("utente non trovato")
    }
}

export const filterByCategory = async (list: AdvData[], category: string, checked: boolean): Promise<AdvData[]> => {
    const advertises = getAds();
    let filtered: AdvData[] = list
    if (checked) {
        const adsToAdd = (await advertises).filter((ad) => ad.category === category);
        filtered = [...filtered, ...adsToAdd];
    } else {
        filtered = filtered.filter((ad) => ad.category !== category);
    }
    return filtered
}

export const searchText = async (text: string): Promise<AdvData[]> => {
    const ads = getAds();
    const lowercasedText = text.toLowerCase();
    let filtered: AdvData[] = []
    if (text.trim() === '') {
        return ads;
    } else {
        filtered = (await ads).filter((ad) => {
            return ad.title.toLowerCase().includes(lowercasedText) ||
                ad.description.toLowerCase().includes(lowercasedText);
        });
        return filtered
    }
};

export const purchaseAdv = (adv: AdvData) => {
    const userString = localStorage.getItem('actualUser')
    if (userString) {
        const user = JSON.parse(userString);
        user.purchased.push(adv)
        updateActualUser(user)
        soldAdv(adv)
    } else {
        throw new Error("utente non trovato")
    }
}

export const soldAdv = async (adv: AdvData) => {
    const user = getUserByEmail(adv.seller);
    (await user).sold.push(adv);
    const advIndex = (await user).actives.findIndex(a => a.id === adv.id);
    if (advIndex !== -1) {
        (await user).actives.splice(advIndex, 1);
    }
    updateUsers(await user)
}