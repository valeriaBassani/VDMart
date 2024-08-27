import { faker } from "@faker-js/faker";
import { getActualUser } from "../users";

export interface AdvData {
    id: string,
    title: string,
    price: number,
    category: string,
    shipping: boolean,
    shippingPrice: number,
    publishData: string,
    seller: string,
    phone: string,
    description: string
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
    id: "",
    title: "",
    price: 0,
    category: "",
    shipping: false,
    shippingPrice: 0,
    publishData: "",
    seller: "",
    phone: "",
    description: ""
}

export const createAdv = async (): Promise<AdvData> => {
    const user = await getActualUser()
    return {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        category: getRandomCategory(categories),
        shipping: faker.datatype.boolean(),
        shippingPrice: parseFloat(faker.commerce.price()),
        publishData: faker.date.anytime().toISOString(),
        //seller: faker.internet.email(),
        seller: user.email,
        phone: faker.phone.number(),
        description: faker.lorem.paragraph()
    };
}

export const saveAdv = async (adv: AdvData): Promise<AdvData> => {
    return (adv);
}

export const getAds = async (): Promise<AdvData[]> => {
    const advertisesString = localStorage.getItem('advertises');
    const user = await getActualUser();
    let ads: AdvData[] = [];
    if (advertisesString) {
        const advertises: AdvData[] = JSON.parse(advertisesString);
        ads = advertises.filter((adv) => adv.seller !== user.email);
    }
    return ads;
}


export const getActualAdv = async (): Promise<AdvData> => {
    const adsString = localStorage.getItem('actualAdv');
    const adv: AdvData = adsString ? JSON.parse(adsString) : emptyAds;
    return adv
}

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


export const setMaxPrice = async (): Promise<number> => {
    const ads = await getAds()
    let max = 0
    ads.map((adv) => {
        if (adv.price > max) {
            max = adv.price
        }
    })
    return max
}

export const isFavourite = async (adv: AdvData): Promise<boolean> => {
    const userString = localStorage.getItem('actualUser')
    if (userString) {
        const user = JSON.parse(userString);
        const fav = user.favourites
        const adIndex = fav.find((ad: { id: string; }) => ad.id === adv.id);
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
