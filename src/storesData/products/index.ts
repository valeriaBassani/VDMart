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
        publishData: "10/11/2002",
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


