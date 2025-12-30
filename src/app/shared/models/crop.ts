export interface Crop {
    id: number;
    name: string;
    price: number;
    quantity: string;
    location: string;
    farmerId: number;
}


export interface User {
    id: number;
    role: 'farmer' | 'buyer';
    name: string;
    mobile: string;
    location: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
}