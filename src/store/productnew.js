import { defineStore } from 'pinia'
import axios from 'axios'

export const productsStore = defineStore('products', {
    state: () => ({
        products: [],
        cart: [],
        

    }),

    actions: {
        async fetchProductsFromDB() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API2}getallproduct`);
                this.products = response.data.product;
                console.log(this.products)
                // Loop through each product and call downloadImageAndDisplay
                await Promise.all(this.products.map(async (product) => {
                    product.image = await this.downloadImageAndDisplay(product.image);
                }));

                await Promise.all(this.products.map(async (product) => {
                    product.quantity = 0
                }));

            } catch (error) {
                console.log("Error fetching products:", error);
            }
        },

        addToCart(product) {
            console.log('this come form addToCart func' , product.quantity);
            this.cart.push(product);
            console.log('this come form addToCart func' , this.cart);
            
        },

        removeFromCart(id) {
            console.log('>>>>> ID', id);
            this.cart = this.cart.filter((item) => item.ID !== id);
        },

        async downloadImageAndDisplay(uuid) {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API2}preview/${uuid}`,
                    {
                        responseType: 'arraybuffer',
                    }
                );
                const imageSrc = `data:${response.headers['content-type']};base64,${btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
                return imageSrc;
            } catch (error) {
                console.error("Error downloading image:", error);
                throw error;
            }
        },


        increment_quantity(i) {
            const foundItem = this.cart.find((item) => {
                console.log(item);
                console.log(item.ID); // Log the current item being checked
                return item.ID === i;
            });
        
            console.log('This comes from foundItem', foundItem);
        
            if (foundItem) {
                foundItem.quantity += 1;
                console.log('Updated quantity:', foundItem.quantity);
            } else {
                console.log('Item not found in the cart.');
            }
        },
        
    
        decrement_quantity(i) {
            const foundItem = this.cart.find((item) => {
                console.log(item);
                console.log(item.ID); // Log the current item being checked
                return item.ID === i;
            });
        
            console.log('This comes from foundItem', foundItem);
        
            if (foundItem &&  foundItem.quantity > 0 ) {
                foundItem.quantity -= 1;
                console.log('Updated quantity:', foundItem.quantity);
            } 
        }
        

    }
   
});
