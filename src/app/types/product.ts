export interface Product {
        id?: string;
        "name": string,    
        "description": string,
        "shotDescription": string,
        "price": number,
        "discount": number,
        "images": string[],
        "categoryId": string
}