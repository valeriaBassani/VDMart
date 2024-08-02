import { faker } from "@faker-js/faker";
import { getActualUser } from "../users";

export interface AdvData{
    id:string,
    title:string,
    price:number,
    category:string,
    shipping:boolean,
    shippingPrice:number,
    publishData:string,
    seller:string,
    phone:string,
    description:string
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

export const emptyAds ={
    id:"",
    title: "",
    price:0, 
    category:  "",
    shipping: false, 
    shippingPrice:0, 
    publishData:"",
    seller: "",
    phone: "", 
    description: "" 
}

export const createAdv= async():Promise<AdvData>=>{
    const user= await getActualUser()
    return {
        id:faker.datatype.uuid(),
        title: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()), 
        category:  getRandomCategory(categories),
        shipping: faker.datatype.boolean(), 
        shippingPrice: parseFloat(faker.commerce.price()), 
        publishData:faker.date.birthdate().toISOString(),
        //seller: faker.internet.email(),
        seller: user.email,
        phone: faker.phone.number(), 
        description: faker.lorem.paragraph() 
    };
}

export const saveAdv = async (adv: AdvData): Promise<AdvData> => {
    return(adv);
}

export const getAds =async(): Promise<AdvData[]> =>  {
    const advertises = localStorage.getItem('advertises');
    let ads: AdvData[] = []
    if(advertises){
        ads = JSON.parse(advertises);    
    }
    return ads
}

export const getActualAdv =async():Promise<AdvData>=>{
    const adsString = localStorage.getItem('actualAdv');
    const adv: AdvData = adsString ? JSON.parse(adsString) : emptyAds;
    return adv
}

export const orderByDate = async (orderBy:boolean):Promise<AdvData[]>=> {
    const ads = await getAds()
    return ads.sort((a, b) => {
        const dateA = new Date(a.publishData);
        const dateB = new Date(b.publishData);
        if(orderBy){
            return dateA.getTime() - dateB.getTime();
        }else{
            return  dateB.getTime()-dateA.getTime();
        }
        //return dateA.getTime() - dateB.getTime();
    });
}




// export const orderByDate = async (orderBy: string): Promise<AdvData[]> => {
//     const ads = await getAds();
//     return ads.sort((a, b) => {
//         const dateA = new Date(a.publishData);
//         const dateB = new Date(b.publishData);
//         if (orderBy === 'asc') {
//             return dateA.getTime() - dateB.getTime();
//         } else if (orderBy === 'desc') {
//             return dateB.getTime() - dateA.getTime();
//         } else {
//             throw new Error("orderBy deve essere 'asc' o 'desc'");
//         }
//     });
// };