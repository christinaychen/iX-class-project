import { Product } from "../models/product";
import { Injectable } from "@angular/core";
import { Shelter } from "../models/shelter";
import { Purchases } from "../models/purchases";

@Injectable()


export class PurchasesService {
    private purchases: Array<Purchases>;

    constructor() {
        this.purchases = [];


    }

    getAllPurchases() {
        this.purchases = [];

        var product1 = new Purchases();
        product1.name = "Pillow";
        product1.imageUrl = "https://media.sheridanoutlet.com.au/catalog/product/cache/1/image/1200x800/9df78eab33525d08d6e5fb8d27136e95/f/r/fresh-loft-pillow-white.jpg";
        product1.price = 15;
        product1.datePurchased = "1/1/2018";
        var product2 = new Purchases();
        product2.name = "Mattress";
        product2.imageUrl = "https://res-2.cloudinary.com/dreams-co-uk/image/upload/c_pad,dpr_1.0,f_auto,h_730,q_80,w_1000/media/catalog/product/c/o/comfort-essential-mattress.jpg";
        product2.price = 100;
        product2.datePurchased = "1/1/2018";
        var product3 = new Purchases();
        product3.name = "Socks";
        product3.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_JmI4Vw7mK6zbHHI203q1xRiIGKW52eSfOBNp9qm3NcZW9SD";
        product3.price = 5;
        product3.datePurchased = "1/1/2018";

        this.purchases.push(product1);
        this.purchases.push(product2);
        this.purchases.push(product3);

        return this.purchases;
    }
}

